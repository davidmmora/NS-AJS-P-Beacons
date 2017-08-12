import { HomeComponent } from "./views/home/home.component";
import { BeaconComponent } from "./views/beacons/beacon.component";

export const routes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "beacons" , component: BeaconComponent }
];
export const navigatableComponents: any = [
    HomeComponent,
    BeaconComponent
];