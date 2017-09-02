import { selector } from "rxjs/operator/publish";
import { Component,OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { PageService } from "../../services/page.service";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";

@Component({
    selector: "beacons",
    providers : [PageService],
    templateUrl: "views/beacons/beacon.component.html",
    styleUrls: ["views/beacons/beacon.component.css"]
})
export class BeaconComponent implements OnInit {
    routerExtensions: any;
    pages: Array<Page>;
    constructor(private pageService: PageService) {}
    ngOnInit():void {
        this.pages = this.pageService.getPages();
    }
    onAddTap():void {
        let options: NavigationOptions = {
            clearHistory:true
        };
    this.routerExtensions.navigate(
        ["detalle",this.pages.length],options);
    }
}