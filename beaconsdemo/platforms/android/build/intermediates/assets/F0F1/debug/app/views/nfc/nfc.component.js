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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5mYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsaUJBQWlCO0FBQ2pCLHFEQUF1QztBQU92QyxJQUFhLFlBQVk7SUFDckI7UUFFSSx5QkFBeUI7UUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxzQkFBRyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDOztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vIHJlcXVpcmUgcGx1Z2luXHJcbmltcG9ydCB7IE5mYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmZjXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5mY1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbmZjL25mYy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9uZmMvbmZjLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5mY0NvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICAvLyBpbnN0YW50aWF0ZSB0aGUgcGx1Z2luXHJcbiAgICAgICAgbGV0IG5mYyA9IG5ldyBOZmMoKTtcclxuICAgICAgICBuZmMuYXZhaWxhYmxlKCkudGhlbigoYXZhaWwpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXZhaWwgPyBcIlNJXCIgOiBcIk5BUkFOSkFTIEFHUklBU1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==