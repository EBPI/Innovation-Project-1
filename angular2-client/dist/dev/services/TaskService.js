var http_1 = require("services/http");
var config_1 = require("../config");
var task_1 = require('../components/tasks/task');
var TaskServiceImpl = (function () {
    function TaskServiceImpl() {
    }
    TaskServiceImpl.prototype.getTasks = function () {
        var token = localStorage.getItem("jwt");
        return http_1.$http.get(config_1.REST_HOST + "/api/tasks/tim", token);
    };
    TaskServiceImpl.prototype.addTask = function (task) {
        var token = localStorage.getItem("jwt");
        return http_1.$http.post(config_1.REST_HOST + "/api/tasks/tim", task, token);
    };
    TaskServiceImpl.prototype.updateTask = function (task) {
        var token = localStorage.getItem("jwt");
        return http_1.$http.put(config_1.REST_HOST + "/api/tasks/tim", task, token);
    };
    return TaskServiceImpl;
})();
exports.TaskServiceImpl = TaskServiceImpl;
var TaskServiceOfflineImpl = (function () {
    function TaskServiceOfflineImpl() {
        this.goRun = new task_1.Task("Go for a run", 1);
        this.goShower = new task_1.Task("Go have a shower", 2);
        this.tasks = new Array();
        this.tasks.push(this.goRun);
        this.tasks.push(this.goShower);
    }
    TaskServiceOfflineImpl.prototype.getTasks = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            resolve({ actionResult: that.tasks });
        });
    };
    TaskServiceOfflineImpl.prototype.addTask = function (task) {
        var nextId = this.tasks.length++;
        task.setId(nextId);
        return new Promise(function (resolve, reject) {
            resolve({ actionResult: { _id: nextId } });
        });
    };
    TaskServiceOfflineImpl.prototype.updateTask = function (task) {
        return new Promise(function (resolve, reject) {
            resolve({ actionResult: { _id: task._id } });
        });
    };
    return TaskServiceOfflineImpl;
})();
exports.TaskServiceOfflineImpl = TaskServiceOfflineImpl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Rhc2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlRhc2tTZXJ2aWNlSW1wbCIsIlRhc2tTZXJ2aWNlSW1wbC5jb25zdHJ1Y3RvciIsIlRhc2tTZXJ2aWNlSW1wbC5nZXRUYXNrcyIsIlRhc2tTZXJ2aWNlSW1wbC5hZGRUYXNrIiwiVGFza1NlcnZpY2VJbXBsLnVwZGF0ZVRhc2siLCJUYXNrU2VydmljZU9mZmxpbmVJbXBsIiwiVGFza1NlcnZpY2VPZmZsaW5lSW1wbC5jb25zdHJ1Y3RvciIsIlRhc2tTZXJ2aWNlT2ZmbGluZUltcGwuZ2V0VGFza3MiLCJUYXNrU2VydmljZU9mZmxpbmVJbXBsLmFkZFRhc2siLCJUYXNrU2VydmljZU9mZmxpbmVJbXBsLnVwZGF0ZVRhc2siXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFvQixlQUFlLENBQUMsQ0FBQTtBQUNwQyx1QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFDcEMscUJBQW1CLDBCQUEwQixDQUFDLENBQUE7QUFROUM7SUFBQUE7SUEyQkFDLENBQUNBO0lBdEJPRCxrQ0FBUUEsR0FBZkE7UUFDQ0UsSUFBSUEsS0FBS0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLE1BQU1BLENBQUNBLFlBQUtBLENBQUNBLEdBQUdBLENBQUNBLGtCQUFTQSxHQUFHQSxnQkFBZ0JBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3ZEQSxDQUFDQTtJQU1NRixpQ0FBT0EsR0FBZEEsVUFBZUEsSUFBVUE7UUFDeEJHLElBQUlBLEtBQUtBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3hDQSxNQUFNQSxDQUFDQSxZQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBU0EsR0FBR0EsZ0JBQWdCQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUM5REEsQ0FBQ0E7SUFNTUgsb0NBQVVBLEdBQWpCQSxVQUFrQkEsSUFBVUE7UUFDM0JJLElBQUlBLEtBQUtBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3hDQSxNQUFNQSxDQUFDQSxZQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBU0EsR0FBR0EsZ0JBQWdCQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUM3REEsQ0FBQ0E7SUFDRkosc0JBQUNBO0FBQURBLENBM0JBLElBMkJDO0FBM0JZLHVCQUFlLGtCQTJCM0IsQ0FBQTtBQUVEO0lBS0NLO1FBSlFDLFVBQUtBLEdBQVNBLElBQUlBLFdBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQzFDQSxhQUFRQSxHQUFTQSxJQUFJQSxXQUFJQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pEQSxVQUFLQSxHQUFnQkEsSUFBSUEsS0FBS0EsRUFBUUEsQ0FBQ0E7UUFHOUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzVCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFLTUQseUNBQVFBLEdBQWZBO1FBQ0NFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUNqQkEsVUFBU0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDdkIsT0FBTyxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FDREEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDTUYsd0NBQU9BLEdBQWRBLFVBQWVBLElBQVNBO1FBQ3ZCRyxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNqQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQ2pCQSxVQUFTQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUN2QixPQUFPLENBQUMsRUFBQyxZQUFZLEVBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FDREEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDTUgsMkNBQVVBLEdBQWpCQSxVQUFrQkEsSUFBVUE7UUFFM0JJLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQ2pCQSxVQUFTQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUN2QixPQUFPLENBQUMsRUFBQyxZQUFZLEVBQUUsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQ0RBLENBQUNBO0lBQ0hBLENBQUNBO0lBQ0ZKLDZCQUFDQTtBQUFEQSxDQXRDQSxJQXNDQztBQXRDWSw4QkFBc0IseUJBc0NsQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1Rhc2tTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHskaHR0cH0gZnJvbSBcInNlcnZpY2VzL2h0dHBcIjtcbmltcG9ydCB7UkVTVF9IT1NUfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQge1Rhc2t9IGZyb20gJy4uL2NvbXBvbmVudHMvdGFza3MvdGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFza1NlcnZpY2Uge1xuXHRnZXRUYXNrcygpOiBQcm9taXNlPGFueT47XG5cdGFkZFRhc2sodGFzazpUYXNrKTogUHJvbWlzZTxhbnk+O1xuXHR1cGRhdGVUYXNrKHRhc2s6VGFzayk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhc2tTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIFRhc2tTZXJ2aWNlIHtcblxuXHQvKipcblx0ICogQHJldHVybnMgYSBsaXN0IG9mIFRhc2sgb2JqZWN0cyBhcyBhIEphdmFTY3JpcHQgQXJyYXlcblx0ICovXG5cdHB1YmxpYyBnZXRUYXNrcygpOiBQcm9taXNlPGFueT4ge1xuXHRcdGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xuXHRcdHJldHVybiAkaHR0cC5nZXQoUkVTVF9IT1NUICsgXCIvYXBpL3Rhc2tzL3RpbVwiLCB0b2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHRhc2sgaXMgYSBUYXNrIG9iamVjdFxuXHQgKiBAcmV0dXJucyBzZXJ2ZXIgX2lkIG9mIG5ld2x5IGNyZWF0ZWQgdGFza1xuXHQgKi9cblx0cHVibGljIGFkZFRhc2sodGFzazogVGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0bGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XG5cdFx0cmV0dXJuICRodHRwLnBvc3QoUkVTVF9IT1NUICsgXCIvYXBpL3Rhc2tzL3RpbVwiLCB0YXNrLCB0b2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHRhc2sgaXMgYSBUYXNrIG9iamVjdFxuXHQgKiBAcmV0dXJucyBzZXJ2ZXIgX2lkIG9mIG5ld2x5IGNyZWF0ZWQgdGFza1xuXHQgKi9cblx0cHVibGljIHVwZGF0ZVRhc2sodGFzazogVGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0bGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XG5cdFx0cmV0dXJuICRodHRwLnB1dChSRVNUX0hPU1QgKyBcIi9hcGkvdGFza3MvdGltXCIsIHRhc2ssIHRva2VuKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgVGFza1NlcnZpY2VPZmZsaW5lSW1wbCBpbXBsZW1lbnRzIFRhc2tTZXJ2aWNlIHtcblx0cHJpdmF0ZSBnb1J1bjogVGFzayA9IG5ldyBUYXNrKFwiR28gZm9yIGEgcnVuXCIsIDEpO1xuXHRwcml2YXRlIGdvU2hvd2VyOiBUYXNrID0gbmV3IFRhc2soXCJHbyBoYXZlIGEgc2hvd2VyXCIsIDIpO1xuXHRwcml2YXRlIHRhc2tzOiBBcnJheTxUYXNrPiA9IG5ldyBBcnJheTxUYXNrPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGFza3MucHVzaCh0aGlzLmdvUnVuKTtcblx0XHR0aGlzLnRhc2tzLnB1c2godGhpcy5nb1Nob3dlcik7XG5cdH1cblxuXHQvL3tfaWQ6IDEsIHVzZXJfaWQ6IDEsIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsIHRpdGxlOiBcIkdvIGZvciBhIHJ1blwiLCBhc3NpZ25lZTogXCJBc3NpZ25lZVwifSxcblx0Ly97X2lkOiAyLCB1c2VyX2lkOiAxLCBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLCB0aXRsZTogXCJTaG93ZXJcIiwgYXNzaWduZWU6IFwiQXNzaWduZWVcIn0sXG5cblx0cHVibGljIGdldFRhc2tzKCk6IFByb21pc2U8YW55PiB7XG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShcblx0XHRcdGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHRyZXNvbHZlKHthY3Rpb25SZXN1bHQ6IHRoYXQudGFza3N9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdHB1YmxpYyBhZGRUYXNrKHRhc2s6VGFzayk6IFByb21pc2U8YW55PiB7XG5cdFx0bGV0IG5leHRJZCA9IHRoaXMudGFza3MubGVuZ3RoKys7XG5cdFx0dGFzay5zZXRJZChuZXh0SWQpO1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShcblx0XHRcdGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHRyZXNvbHZlKHthY3Rpb25SZXN1bHQ6IHtfaWQ6IG5leHRJZH19KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cdHB1YmxpYyB1cGRhdGVUYXNrKHRhc2s6IFRhc2spOiBQcm9taXNlPGFueT4ge1xuXHRcdC8vIFRPRE8gaW1wbGVtZW50XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKFxuXHRcdFx0ZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdHJlc29sdmUoe2FjdGlvblJlc3VsdDoge19pZDogdGFzay5faWR9fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9