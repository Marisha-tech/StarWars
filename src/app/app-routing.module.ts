import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetComponent} from "./views/planet/planet.component";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./views/home-page/home-page.component";
import {PlanetsComponent} from "./views/planets/planets.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      // {path: 'planets', component: PlanetsComponent},
      {path: 'planets/:name', component: PlanetComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
