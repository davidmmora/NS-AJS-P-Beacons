import { HomeComponent } from "./views/home/home.component";
import { BeaconComponent } from "./views/beacons/beacon.component";
import { CreditoComponent} from "./views/creditos/credito.component";
import { NfcComponent } from "./views/nfc/nfc.component";

export const routes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "beacons" , component: BeaconComponent },
    { path: "creditos" , component: CreditoComponent },
    { path: "nfc" , component: NfcComponent }
];
export const navigatableComponents: any = [
    HomeComponent,
    BeaconComponent,
    CreditoComponent,
    NfcComponent
];