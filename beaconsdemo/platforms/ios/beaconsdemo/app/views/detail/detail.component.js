"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_service_1 = require("../../services/page.service");
require("rxjs/add/operator/switchMap");
var DetailComponent = (function () {
    function DetailComponent(routerExtensions, pageService, pageRoute) {
        this.routerExtensions = routerExtensions;
        this.pageService = pageService;
        this.pageRoute = pageRoute;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var id;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            id = +params["id"];
        });
        this.page = this.pageService.getPage(id);
        if (this.page === null) {
            this.page = { Id: id };
        }
    };
    DetailComponent.prototype.onDoneTap = function () {
        this.pageService.savePage(this.page);
        var options = {
            clearHistory: true
        };
        this.routerExtensions.navigate(["beacons"], options);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: "detail",
        providers: [page_service_1.PageService],
        templateUrl: "views/detail/detail.component.html",
        styleUrls: ["views/detail/detail.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        page_service_1.PageService,
        router_1.PageRoute])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsc0RBQTBFO0FBRTFFLDREQUEwRDtBQUMxRCx1Q0FBcUM7QUFRbEMsSUFBYSxlQUFlO0lBRzNCLHlCQUNZLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixTQUFvQjtRQUZwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDO0lBRWpDLGtDQUFRLEdBQVI7UUFDSSxJQUFJLEVBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDaEIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ1QsQ0FBQztJQUNELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFPLEdBQXNCO1lBQ2pDLFlBQVksRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNULHNCQUFDO0FBQUQsQ0FBQyxBQTNCRSxJQTJCRjtBQTNCZSxlQUFlO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1FBQzFCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FDaEQsQ0FBQztxQ0FLNkIseUJBQWdCO1FBQ3JCLDBCQUFXO1FBQ2Isa0JBQVM7R0FOcEIsZUFBZSxDQTJCOUI7QUEzQmUsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvbnMtbG9jYXRpb24tc3RyYXRlZ3lcIjtcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRldGFpbFwiLFxuICAgIHByb3ZpZGVyczogWyBQYWdlU2VydmljZSBdLFxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzc1wiXVxuICAgfSlcbiAgIGV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBhZ2U6IFBhZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkgeyB9XG5cbiAgICAgICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBsZXQgaWQ6bnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaWQgPSArcGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZShpZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSA8UGFnZT57IElkOiBpZCB9O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBvbkRvbmVUYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZVNlcnZpY2Uuc2F2ZVBhZ2UodGhpcy5wYWdlKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSA8TmF2aWdhdGlvbk9wdGlvbnM+e1xuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJlYWNvbnNcIl0sIG9wdGlvbnMpO1xuICAgICAgICB9XG59Il19