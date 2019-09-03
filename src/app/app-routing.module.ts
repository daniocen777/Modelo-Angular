import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PruebaComponent } from "./modulo/prueba/prueba.component";
//import { ThonyComponent } from './pages/thony/thony.component';

const routes: Routes = [{ path: "", component: PruebaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
