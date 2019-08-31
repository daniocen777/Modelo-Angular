import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PruebaComponent } from "./prueba/prueba.component";
import { ComponentsModule } from "../components/components.module";
import { MatGridListModule } from "@angular/material";

@NgModule({
  declarations: [PruebaComponent],
  imports: [CommonModule, ComponentsModule, MatGridListModule]
})
export class ModuloModule {}
