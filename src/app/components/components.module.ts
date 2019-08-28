import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

// Matrial
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from './drawer/drawer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material'


import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [ToolbarComponent, DrawerComponent, ContenidoComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule
  ],
  exports: [ToolbarComponent, DrawerComponent, ContenidoComponent]
})
export class ComponentsModule { }
