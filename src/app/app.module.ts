import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {HomePageComponent} from './views/home-page/home-page.component';
import {PlanetComponent} from './views/planet/planet.component';

import {HttpClientModule} from '@angular/common/http';

import ruLocale from "@angular/common/locales/ru";
import {registerLocaleData} from '@angular/common';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ResidentComponent} from './views/resident/resident.component';
import {IdPlanetPipe} from "./pipe/idPlanet.pipe";
import {PlanetListComponent} from "./views/planet-list/planet-list.component";
import {PlanetService} from "./services/planet.service";
import {ResidentService} from "./services/resident.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

//локализация для вывода даты на русском
registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PlanetComponent,
    PlanetListComponent,
    MainLayoutComponent,
    ResidentComponent,
    IdPlanetPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [PlanetService, ResidentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
