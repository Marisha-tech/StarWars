import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {PostComponent} from './views/post/post.component';
import {PostsComponent} from './views/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';

import ruLocale from "@angular/common/locales/ru";
import {registerLocaleData} from '@angular/common';

//локализация для вывода даты на русском
registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PostComponent,
    PostsComponent
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
