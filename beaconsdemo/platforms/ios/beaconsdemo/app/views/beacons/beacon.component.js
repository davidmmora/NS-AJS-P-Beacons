"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_service_1 = require("../../services/page.service");
var router_1 = require("nativescript-angular/router");
var BeaconComponent = (function () {
    function BeaconComponent(routerExtensions, pageService) {
        this.routerExtensions = routerExtensions;
        this.pageService = pageService;
    }
    BeaconComponent.prototype.ngOnInit = function () {
        this.pages = this.pageService.getPages();
    };
    BeaconComponent.prototype.onAddTap = function () {
        var options = {
            clearHistory: true
        };
        this.routerExtensions.navigate(["detail", this.pages.length], options);
    };
    BeaconComponent.prototype.onItemTap = function (args) {
        // tslint:disable-next-line:typedef
        var id = args.index;
        this.routerExtensions.navigate(["detail", id]);
    };
    return BeaconComponent;
}());
BeaconComponent = __decorate([
    core_1.Component({
        selector: "beacons",
        providers: [page_service_1.PageService],
        templateUrl: "views/beacons/beacon.component.html",
        styleUrls: ["views/beacons/beacon.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        page_service_1.PageService])
], BeaconComponent);
exports.BeaconComponent = BeaconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlYWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBaUQ7QUFFakQsNERBQTBEO0FBRTFELHNEQUErRDtBQVMvRCxJQUFhLGVBQWU7SUFFeEIseUJBQ1ksZ0JBQWtDLEVBQ2xDLFdBQXdCO1FBRHhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBQ3hDLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLE9BQU8sR0FBc0I7WUFDN0IsWUFBWSxFQUFDLElBQUk7U0FDcEIsQ0FBQztRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQzFCLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxJQUFrQjtRQUN4QixtQ0FBbUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7S0FDcEQsQ0FBQztxQ0FJZ0MseUJBQWdCO1FBQ3JCLDBCQUFXO0dBSjNCLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvci9wdWJsaXNoXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhZ2VcIjtcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL25zLWxvY2F0aW9uLXN0cmF0ZWd5XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYmVhY29uc1wiLFxuICAgIHByb3ZpZGVycyA6IFtQYWdlU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvYmVhY29ucy9iZWFjb24uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2JlYWNvbnMvYmVhY29uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmVhY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwYWdlczogQXJyYXk8UGFnZT47XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UpIHt9XG4gICAgbmdPbkluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZXMoKTtcbiAgICB9XG4gICAgb25BZGRUYXAoKTp2b2lkIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IE5hdmlnYXRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OnRydWVcbiAgICAgICAgfTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoXG4gICAgICAgIFtcImRldGFpbFwiLHRoaXMucGFnZXMubGVuZ3RoXSxvcHRpb25zKTtcbiAgICB9XG4gICAgb25JdGVtVGFwKGFyZ3M6SXRlbUV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuICAgICAgICBsZXQgaWQgPSBhcmdzLmluZGV4O1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZGV0YWlsXCIsaWRdKTtcbiAgICB9XG59Il19