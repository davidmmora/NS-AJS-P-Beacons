import { selector } from "rxjs/operator/publish";
import { Component,OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { PageService } from "../../services/page.service";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";
import { RouterExtensions } from "nativescript-angular/router";
import { ItemEventData } from "ui/list-view";

@Component({
    selector: "beacons",
    providers : [PageService],
    templateUrl: "views/beacons/beacon.component.html",
    styleUrls: ["views/beacons/beacon.component.css"]
})
export class BeaconComponent implements OnInit {
    pages: Array<Page>;
    constructor(
        private routerExtensions: RouterExtensions,
        private pageService: PageService) {}
    ngOnInit():void {
        this.pages = this.pageService.getPages();
    }
    onAddTap():void {
        let options: NavigationOptions = {
            clearHistory:true
        };
    this.routerExtensions.navigate(
        ["detail",this.pages.length],options);
    }
    onItemTap(args:ItemEventData): void {
        // tslint:disable-next-line:typedef
        let id = args.index;
        this.routerExtensions.navigate(["detail",id]);
    }
}