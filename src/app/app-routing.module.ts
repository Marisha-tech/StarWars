import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {PostComponent} from "./views/post/post.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'planets/:id', component: PostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
