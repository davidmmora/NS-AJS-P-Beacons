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
    HomeComponent.prototype.onNFCTap = function () {
        this.routerExtensions.navigate(["nfc"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxzREFBNkQ7QUFDN0QsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQUN0Qix1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBQzNELHFDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELDZCQUFLLEdBQUw7UUFDSSxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFLHNCQUFzQixFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsTUFBTTtRQUNmLFdBQVcsRUFBRSxnQ0FBZ0M7S0FFaEQsQ0FBQztxQ0FFd0MseUJBQWdCO0dBRDdDLGFBQWEsQ0FjekI7QUFkWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJob21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zICkge31cclxuICAgIG9uQ29udGludWVUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJlYWNvbnNcIl0pO1xyXG4gICAgfVxyXG4gICAgb25DcmVkaXRvc1RhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiY3JlZGl0b3NcIl0pO1xyXG4gICAgfVxyXG4gICAgb25ORkNUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIm5mY1wiXSk7XHJcbiAgICB9XHJcbiAgICBzaGFyZSgpOiB2b2lkIHtcclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCIsIFwiSG9tZSBvZiBOYXRpdmVTY3JpcHRcIiwgXCJIb3cgd291bGQgeW91IGxpa2UgdG8gc2hhcmUgdGhpcyB1cmw/XCIpO1xyXG4gICAgfVxyXG59Il19