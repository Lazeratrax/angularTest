import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module'
import {SvgIconsDirective} from './directives/svg.icons.directives'


// С ОБЪЕКТОМ ОТДЕЛЬНОГО МОДУЛЯ НАПРМУЮ НЕ РАБОТАЕМ - ТОЛЬКО ЧЕРЕЗ РОУТЕР! 
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SvgIconsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
