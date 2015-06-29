package nl.ebpi.microservices.webserver;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.http.HttpHeaders;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.auth.jwt.JWTAuth;
import io.vertx.ext.auth.jwt.JWTOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.JWTAuthHandler;
import io.vertx.ext.web.handler.StaticHandler;
import java.util.logging.Logger;
import nl.ebpi.microservices.taskservice.TaskService;

/**
 * Main http service to handle http requests for the application
 */
public class WebServer extends AbstractVerticle {
    private final static Logger LOGGER = Logger.getLogger(WebServer.class.getName());
    private JWTAuth jwtAuthProvider;

    @Override
    public void start() throws Exception {
        Router router = Router.router(vertx);

        JsonObject config = new JsonObject().put("keyStore", new JsonObject()
                .put("path", "keystore.jceks")
                .put("type", "jceks")
                .put("password", "secret"));

        jwtAuthProvider = JWTAuth.create(vertx, config);

        // protect the API
        router.route("/api/*").handler(JWTAuthHandler.create(jwtAuthProvider, "/api/newToken"));

        // this route is excluded from the auth handler
        router.get("/api/newToken").handler(this::loginHandler);

        // this is the secret API
        router.get("/test/tasks/:username").handler(this::taskHandler);

        router.options("/api/*").handler(ctx -> {
            ctx.response().putHeader("Access-Control-Allow-Origin", "*");
            ctx.response().putHeader("Access-Control-Allow-Methods", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
            ctx.response().putHeader("Access-Control-Allow-Headers","Authorization, Content-Type");
            ctx.response().putHeader("Allow", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
            ctx.response().end();
        });


        // Serve the non private static pages
        router.route().handler(StaticHandler.create());
        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
        LOGGER.info(String.format("%s is up and running.", WebServer.class.getName()));
    }

    private void taskHandler(RoutingContext ctx) {
        // TODO: in the future versions we have to check whether the user is authorized for CRUD actions on the resource id (taskId)
        vertx.eventBus().send(TaskService.TASK_SERVICE_ADDRESS, ctx.getBodyAsJson(), actionRouter(ctx), reply -> {

            JsonObject resultObject = (JsonObject) reply.result().body();
            JsonObject actionReplyMessage = resultObject.getJsonObject(TaskService.ACTION_REPLY_MESSAGE_KEY);

            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
            ctx.response().putHeader("Access-Control-Allow-Origin", "*");
            ctx.response().putHeader("Access-Control-Allow-Methods", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
            ctx.response().putHeader("Access-Control-Allow-Headers","Authorization, Content-Type");

            if (actionReplyMessage.getBoolean("failed")) {
                ctx.response().end(resultObject.getJsonObject(TaskService.ACTION_REPLY_MESSAGE_KEY).encode());
            } else {

                ctx.response().end(resultObject.getJsonObject(TaskService.ACTION_RESULT_KEY).encode());
            }
        });

    }

    private DeliveryOptions actionRouter(RoutingContext ctx) {
        DeliveryOptions deliveryOptions = new DeliveryOptions();
        HttpMethod method = ctx.request().method();
        switch ( method ) {
            case POST:
                deliveryOptions.addHeader(TaskService.ACTION_KEY, TaskService.ACTION_ADD);
            case PUT:
                deliveryOptions.addHeader(TaskService.ACTION_KEY, TaskService.ACTION_UPDATE);
            case DELETE:
                deliveryOptions.addHeader(TaskService.ACTION_KEY, TaskService.ACTION_REMOVE);
            default:
                deliveryOptions.addHeader(TaskService.ACTION_KEY, TaskService.ACTION_RETRIEVE);
        }

        return deliveryOptions;


    }


    private void loginHandler(RoutingContext context) {
        HttpServerRequest req = context.request();
        String username = req.getParam("username");
        String password = req.getParam("password");
        if (username != null && password != null) {
            JsonObject authInfo = (new JsonObject()).put("username", username).put("password", password);
            vertx.eventBus().send("login-address", authInfo, reply -> {
                context.response().putHeader("Content-Type", "text/plain");
                context.response().putHeader("Access-Control-Allow-Origin", "*");
                context.response().putHeader("Access-Control-Allow-Methods", "HEAD,GET,POST,PUT,DELETE,OPTIONS");
                context.response().putHeader("Access-Control-Allow-Headers","Authorization, Content-Type");
                if (reply.succeeded() && "succeed".equals(reply.result().body())) {
                    LOGGER.info("Good username and password");
                    context.response().end(jwtAuthProvider.generateToken(new JsonObject().put("sub", username), new JWTOptions().setExpiresInSeconds(60)));

                } else {
                    LOGGER.info("Wrong password");
                    context.response().end("Wrong password");
                }
            });
        } else {
            req.response().putHeader("location", "index.html").setStatusCode(302).end();
        }
    }


}
