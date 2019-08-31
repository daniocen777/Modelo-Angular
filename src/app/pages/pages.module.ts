import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { TestComponent } from "./test/test.component";
import { ComponentsModule } from "../components/components.module";

import { MatGridListModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class PagesModule {}
