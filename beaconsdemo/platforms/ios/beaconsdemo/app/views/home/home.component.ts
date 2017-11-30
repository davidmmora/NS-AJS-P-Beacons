import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector:"home",
    templateUrl: "views/home/home.component.html"

})
export class HomeComponent {
    constructor(private routerExtensions: RouterExtensions ) {}
    onContinueTap(): void {
        this.routerExtensions.navigate(["beacons"]);
    }
    onCreditosTap(): void {
        this.routerExtensions.navigate(["creditos"]);
    }
    onNFCTap(): void {
        this.routerExtensions.navigate(["nfc"]);
    }
    share(): void {
        SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
    }
}