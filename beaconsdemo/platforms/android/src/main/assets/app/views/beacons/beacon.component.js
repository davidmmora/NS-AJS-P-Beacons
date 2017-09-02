"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_service_1 = require("../../services/page.service");
var BeaconComponent = (function () {
    function BeaconComponent(pageService) {
        this.pageService = pageService;
    }
    BeaconComponent.prototype.ngOnInit = function () {
        this.pages = this.pageService.getPages();
    };
    BeaconComponent.prototype.onAddTap = function () {
        var options = {
            clearHistory: true
        };
        this.routerExtensions.navigate(["detalle", this.pages.length], options);
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
    __metadata("design:paramtypes", [page_service_1.PageService])
], BeaconComponent);
exports.BeaconComponent = BeaconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlYWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBaUQ7QUFFakQsNERBQTBEO0FBUzFELElBQWEsZUFBZTtJQUd4Qix5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBQ2hELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLE9BQU8sR0FBc0I7WUFDN0IsWUFBWSxFQUFDLElBQUk7U0FDcEIsQ0FBQztRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQzFCLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7S0FDcEQsQ0FBQztxQ0FJbUMsMEJBQVc7R0FIbkMsZUFBZSxDQWMzQjtBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvci9wdWJsaXNoXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYWdlXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvbnMtbG9jYXRpb24tc3RyYXRlZ3lcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYmVhY29uc1wiLFxyXG4gICAgcHJvdmlkZXJzIDogW1BhZ2VTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2JlYWNvbnMvYmVhY29uLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2JlYWNvbnMvYmVhY29uLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJlYWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICByb3V0ZXJFeHRlbnNpb25zOiBhbnk7XHJcbiAgICBwYWdlczogQXJyYXk8UGFnZT47XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuICAgIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZXMoKTtcclxuICAgIH1cclxuICAgIG9uQWRkVGFwKCk6dm9pZCB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE5hdmlnYXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6dHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoXHJcbiAgICAgICAgW1wiZGV0YWxsZVwiLHRoaXMucGFnZXMubGVuZ3RoXSxvcHRpb25zKTtcclxuICAgIH1cclxufSJdfQ==