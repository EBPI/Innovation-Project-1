var Task = (function () {
    function Task(title, _id) {
        this.description = "default description";
        this.assignee = "Tim";
        this.user_id = 1;
        this.title = title;
        this._id = _id;
    }
    Task.prototype.setId = function (id) {
        this._id = id;
    };
    Task.prototype.getId = function () {
        return this._id;
    };
    return Task;
})();
exports.Task = Task;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFzay50cyJdLCJuYW1lcyI6WyJUYXNrIiwiVGFzay5jb25zdHJ1Y3RvciIsIlRhc2suc2V0SWQiLCJUYXNrLmdldElkIl0sIm1hcHBpbmdzIjoiQUFLQTtJQU9JQSxjQUFZQSxLQUFhQSxFQUFFQSxHQUFZQTtRQU52Q0MsZ0JBQVdBLEdBQVdBLHFCQUFxQkEsQ0FBQ0E7UUFFNUNBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1FBRXpCQSxZQUFPQSxHQUFXQSxDQUFDQSxDQUFDQTtRQUdoQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUVNRCxvQkFBS0EsR0FBWkEsVUFBYUEsRUFBVUE7UUFDbkJFLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQUVNRixvQkFBS0EsR0FBWkE7UUFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBQ0xILFdBQUNBO0FBQURBLENBbkJBLElBbUJDO0FBbkJZLFlBQUksT0FtQmhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90YXNrcy90YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiogQVBJIGRlY2xhcmVzIGEgVGFzayBhczpcbioge1wiZGVzY3JpcHRpb25cIjpcIlRhc2sgZGVzY3JpcHRpb25cIixcIl9pZFwiOlwiMVwiLFwiYXNzaWduZWVcIjpcIlRpbVwiLFwidGl0bGVcIjpcIlJlcG9ydCBhbiBpc3N1ZVwiLFwidXNlcl9pZFwiOlwiMVwifVxuKi9cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJkZWZhdWx0IGRlc2NyaXB0aW9uXCI7XG4gICAgX2lkOiBudW1iZXI7XG4gICAgYXNzaWduZWU6IHN0cmluZyA9IFwiVGltXCI7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHVzZXJfaWQ6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBfaWQ/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9pZCA9IF9pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9