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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsc0RBQTBFO0FBRTFFLDREQUEwRDtBQUMxRCx1Q0FBcUM7QUFRbEMsSUFBYSxlQUFlO0lBRzNCLHlCQUNZLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixTQUFvQjtRQUZwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDO0lBRWpDLGtDQUFRLEdBQVI7UUFDSSxJQUFJLEVBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDaEIsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ1QsQ0FBQztJQUNELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFPLEdBQXNCO1lBQ2pDLFlBQVksRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNULHNCQUFDO0FBQUQsQ0FBQyxBQTNCRSxJQTJCRjtBQTNCZSxlQUFlO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1FBQzFCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FDaEQsQ0FBQztxQ0FLNkIseUJBQWdCO1FBQ3JCLDBCQUFXO1FBQ2Isa0JBQVM7R0FOcEIsZUFBZSxDQTJCOUI7QUEzQmUsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvbnMtbG9jYXRpb24tc3RyYXRlZ3lcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJkZXRhaWxcIixcclxuICAgIHByb3ZpZGVyczogWyBQYWdlU2VydmljZSBdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cclxuICAgfSlcclxuICAgZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwYWdlOiBQYWdlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7IH1cclxuXHJcbiAgICAgICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCBpZDpudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlU2VydmljZS5nZXRQYWdlKGlkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSA8UGFnZT57IElkOiBpZCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkRvbmVUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlU2VydmljZS5zYXZlUGFnZSh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gPE5hdmlnYXRpb25PcHRpb25zPntcclxuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJiZWFjb25zXCJdLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbn0iXX0=