import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PruebaComponent } from "./prueba/prueba.component";
import { ComponentsModule } from "../components/components.module";
import { MatGridListModule } from "@angular/material";
import { ToolbarIzquierdaComponent } from './toolbar-izquierda/toolbar-izquierda.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToolbarDerechaComponent } from './toolbar-derecha/toolbar-derecha.component';
import { ListaComponent } from './lista/lista.component';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContenidoDerechaComponent } from './contenido-derecha/contenido-derecha.component';

@NgModule({
  declarations: [PruebaComponent, ToolbarIzquierdaComponent, ToolbarDerechaComponent, ListaComponent, ContenidoDerechaComponent],
  imports: [CommonModule, ComponentsModule, MatGridListModule, FormsModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatProgressSpinnerModule]
})
export class ModuloModule { }
