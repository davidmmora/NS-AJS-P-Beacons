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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxzREFBNkQ7QUFDN0QsdURBQXlEO0FBT3pELElBQWEsYUFBYTtJQUN0Qix1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHdEQsQ0FBQztJQUNELHFDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELDZCQUFLLEdBQUw7UUFDSSxXQUFXLENBQUMsUUFBUSxDQUFDLCtCQUErQixFQUFFLHNCQUFzQixFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsTUFBTTtRQUNmLFdBQVcsRUFBRSxnQ0FBZ0M7S0FFaEQsQ0FBQztxQ0FFd0MseUJBQWdCO0dBRDdDLGFBQWEsQ0FpQnpCO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcImhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMgKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIG9uQ29udGludWVUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJlYWNvbnNcIl0pO1xyXG4gICAgfVxyXG4gICAgb25DcmVkaXRvc1RhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiY3JlZGl0b3NcIl0pO1xyXG4gICAgfVxyXG4gICAgb25ORkNUYXAoKTp2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJuZmNcIl0pO1xyXG4gICAgfVxyXG4gICAgc2hhcmUoKXtcclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChcImh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvXCIsIFwiSG9tZSBvZiBOYXRpdmVTY3JpcHRcIiwgXCJIb3cgd291bGQgeW91IGxpa2UgdG8gc2hhcmUgdGhpcyB1cmw/XCIpO1xyXG4gICAgfVxyXG59Il19