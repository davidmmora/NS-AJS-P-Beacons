import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// require plugin
import { Nfc } from "nativescript-nfc";

@Component({
    selector: "nfc",
    templateUrl: "views/nfc/nfc.component.html",
    styleUrls: ["views/nfc/nfc.component.css"]
})
export class NfcComponent{
    constructor()
    {
        // instantiate the plugin
        let nfc = new Nfc();
        nfc.available().then((avail) => {
            console.log(avail ? "SI" : "NARANJAS AGRIAS");
        });
    }
}