import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {HomePageComponent} from './views/home-page/home-page.component';
import {PlanetComponent} from './views/planet/planet.component';
import {PlanetsComponent} from './views/planets/planets.component';
import {HttpClientModule} from '@angular/common/http';

import ruLocale from "@angular/common/locales/ru";
import {registerLocaleData} from '@angular/common';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

//локализация для вывода даты на русском
registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PlanetComponent,
    PlanetsComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
