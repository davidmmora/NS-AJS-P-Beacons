"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SocialShare = require("nativescript-social-share");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.onContinueTap = function () {
        this.routerExtensions.navigate(["beacons"]);
    };
    HomeComponent.prototype.onCreditosTap = function () {
        this.routerExtensions.navigate(["creditos"]);
    };
    HomeComponent.prototype.share = function () {
        SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxzREFBNkQ7QUFDN0QsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQUN0Qix1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHdEQsQ0FBQztJQUNELHFDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsRUFBRSxzQkFBc0IsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO0lBQzNILENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLE1BQU07UUFDZixXQUFXLEVBQUUsZ0NBQWdDO0tBRWhELENBQUM7cUNBRXdDLHlCQUFnQjtHQUQ3QyxhQUFhLENBY3pCO0FBZFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6XCJob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCJcblxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMgKVxuICAgIHtcblxuICAgIH1cbiAgICBvbkNvbnRpbnVlVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYmVhY29uc1wiXSk7XG4gICAgfVxuICAgIG9uQ3JlZGl0b3NUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJjcmVkaXRvc1wiXSk7XG4gICAgfVxuICAgIHNoYXJlKCl7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVXJsKFwiaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9cIiwgXCJIb21lIG9mIE5hdGl2ZVNjcmlwdFwiLCBcIkhvdyB3b3VsZCB5b3UgbGlrZSB0byBzaGFyZSB0aGlzIHVybD9cIik7XG4gICAgfVxufSJdfQ==