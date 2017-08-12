"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.onContinueTap = function () {
        this.routerExtensions.navigate(["beacons"]);
    };
    HomeComponent.prototype.onContinueTap2 = function () {
        this.routerExtensions.navigate(["creditos"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "views/home/home.component.html"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxzREFBNkQ7QUFPN0QsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUd0RCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsTUFBTTtRQUNmLFdBQVcsRUFBRSxnQ0FBZ0M7S0FFaEQsQ0FBQztxQ0FFd0MseUJBQWdCO0dBRDdDLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOlwiaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiXG5cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zIClcbiAgICB7XG5cbiAgICB9XG4gICAgb25Db250aW51ZVRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJlYWNvbnNcIl0pO1xuICAgIH1cbiAgICBvbkNvbnRpbnVlVGFwMigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImNyZWRpdG9zXCJdKTtcbiAgICB9XG59Il19