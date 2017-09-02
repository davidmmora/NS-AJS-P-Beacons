import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { BeaconComponent } from "./views/beacons/beacon.component";
import { CreditoComponent } from "./views/creditos/credito.component";
import { NfcComponent } from "./views/nfc/nfc.component";

import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptRouterModule } from "nativescript-angular";

@NgModule({
  declarations: [AppComponent, ...navigatableComponents],
  bootstrap: [AppComponent],
  imports: [
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(routes)
],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
