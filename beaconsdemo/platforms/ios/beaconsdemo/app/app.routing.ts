import { HomeComponent } from "./views/home/home.component";
import { BeaconComponent } from "./views/beacons/beacon.component";
import { CreditoComponent} from "./views/creditos/credito.component";

export const routes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "beacons" , component: BeaconComponent },
    { path: "creditos" , component: CreditoComponent }
];
export const navigatableComponents: any = [
    HomeComponent,
    BeaconComponent,
    CreditoComponent
];