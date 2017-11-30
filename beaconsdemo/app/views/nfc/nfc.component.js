"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// require plugin
var nativescript_nfc_1 = require("nativescript-nfc");
var NfcComponent = (function () {
    function NfcComponent() {
        // instantiate the plugin
        var nfc = new nativescript_nfc_1.Nfc();
        nfc.available().then(function (avail) {
            console.log(avail ? "SI" : "NARANJAS AGRIAS");
        });
    }
    return NfcComponent;
}());
NfcComponent = __decorate([
    core_1.Component({
        selector: "nfc",
        templateUrl: "views/nfc/nfc.component.html",
        styleUrls: ["views/nfc/nfc.component.css"]
    }),
    __metadata("design:paramtypes", [])
], NfcComponent);
exports.NfcComponent = NfcComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5mYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsaUJBQWlCO0FBQ2pCLHFEQUF1QztBQU92QyxJQUFhLFlBQVk7SUFDckI7UUFFSSx5QkFBeUI7UUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxzQkFBRyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDOztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuLy8gcmVxdWlyZSBwbHVnaW5cbmltcG9ydCB7IE5mYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmZjXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5mY1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL25mYy9uZmMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL25mYy9uZmMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBOZmNDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgLy8gaW5zdGFudGlhdGUgdGhlIHBsdWdpblxuICAgICAgICBsZXQgbmZjID0gbmV3IE5mYygpO1xuICAgICAgICBuZmMuYXZhaWxhYmxlKCkudGhlbigoYXZhaWwpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF2YWlsID8gXCJTSVwiIDogXCJOQVJBTkpBUyBBR1JJQVNcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=