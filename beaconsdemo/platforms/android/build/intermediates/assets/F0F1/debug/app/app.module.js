"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var nativescript_angular_1 = require("nativescript-angular");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents),
        bootstrap: [app_component_1.AppComponent],
        imports: [nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptRouterModule,
            nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQU0vQyw2Q0FBOEQ7QUFDOUQsNkRBQWdFO0FBVWhFLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQVRyQixlQUFRLENBQUM7UUFDUixZQUFZLEdBQUcsNEJBQVksU0FBSyxtQ0FBcUIsQ0FBQztRQUN0RCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQjtZQUM1QiwrQ0FBd0I7WUFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7U0FDekM7UUFDQyxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0JlYWNvbkNvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvYmVhY29ucy9iZWFjb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q3JlZGl0b0NvbXBvbmVudH0gZnJvbSBcIi4vdmlld3MvY3JlZGl0b3MvY3JlZGl0by5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZmNDb21wb25lbnR9IGZyb20gXCIuL3ZpZXdzL25mYy9uZmMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcclxuXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19