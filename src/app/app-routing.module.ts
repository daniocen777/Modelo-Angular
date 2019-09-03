import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';

const routes: Routes = [
  { path: "second", component: SecondPageComponent },
  { path: "third", component: ThirdPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
