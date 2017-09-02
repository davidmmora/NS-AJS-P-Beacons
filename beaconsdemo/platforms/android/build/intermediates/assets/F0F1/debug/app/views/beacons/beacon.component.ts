import {Component} from "@angular/core";
import {selector} from 'rxjs/operator/publish';
import { Page } from "../../models/page";
 
@Component({
    selector: "beacons",
    templateUrl: "views/beacons/beacon.component.html",
    styleUrls: ["views/beacons/beacon.component.css"]
})
export class BeaconComponent{
    pages : Array<Page>;
    constructor(){}
}