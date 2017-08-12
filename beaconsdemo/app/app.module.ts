import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import {HomeComponent} from "./views/home/home.component";
import {BeaconComponent} from "./views/beacons/beacon.component";

import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptRouterModule } from "nativescript-angular";
@NgModule({
  declarations: [AppComponent, ...navigatableComponents],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes)
],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
