import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import { ModalPowerMetersComponent } from './modals/modal-power-meters/modal-power-meters.component';
import { ModalIntoductionComponent } from './modals/modal-intoduction/modal-intoduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModalPowerMetersComponent,
    ModalIntoductionComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
