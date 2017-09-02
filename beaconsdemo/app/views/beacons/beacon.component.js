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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlYWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBaUQ7QUFFakQsNERBQTBEO0FBRTFELHNEQUErRDtBQVMvRCxJQUFhLGVBQWU7SUFFeEIseUJBQ1ksZ0JBQWtDLEVBQ2xDLFdBQXdCO1FBRHhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBQ3hDLGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLE9BQU8sR0FBc0I7WUFDN0IsWUFBWSxFQUFDLElBQUk7U0FDcEIsQ0FBQztRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQzFCLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxJQUFrQjtRQUN4QixtQ0FBbUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7S0FDcEQsQ0FBQztxQ0FJZ0MseUJBQWdCO1FBQ3JCLDBCQUFXO0dBSjNCLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvci9wdWJsaXNoXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYWdlXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvbnMtbG9jYXRpb24tc3RyYXRlZ3lcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYmVhY29uc1wiLFxyXG4gICAgcHJvdmlkZXJzIDogW1BhZ2VTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2JlYWNvbnMvYmVhY29uLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2JlYWNvbnMvYmVhY29uLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJlYWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwYWdlczogQXJyYXk8UGFnZT47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcbiAgICBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLnBhZ2VTZXJ2aWNlLmdldFBhZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBvbkFkZFRhcCgpOnZvaWQge1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBOYXZpZ2F0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OnRydWVcclxuICAgICAgICB9O1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFxyXG4gICAgICAgIFtcImRldGFpbFwiLHRoaXMucGFnZXMubGVuZ3RoXSxvcHRpb25zKTtcclxuICAgIH1cclxuICAgIG9uSXRlbVRhcChhcmdzOkl0ZW1FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxyXG4gICAgICAgIGxldCBpZCA9IGFyZ3MuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImRldGFpbFwiLGlkXSk7XHJcbiAgICB9XHJcbn0iXX0=