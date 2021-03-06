import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { ModuloModule } from "./modulo/modulo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule,
    ModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
