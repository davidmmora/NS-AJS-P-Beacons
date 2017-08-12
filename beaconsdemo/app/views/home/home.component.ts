import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector:"home",
    templateUrl: "views/home/home.component.html"

})
export class HomeComponent {
    constructor(private routerExtensions: RouterExtensions )
    {

    }
    onContinueTap(): void {
        this.routerExtensions.navigate(["beacons"]);
    }
    onContinueTap2(): void {
        this.routerExtensions.navigate(["creditos"]);
    }
}