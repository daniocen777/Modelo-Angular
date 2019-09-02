import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-izquierda',
  templateUrl: './toolbar-izquierda.component.html',
  styleUrls: ['./toolbar-izquierda.component.scss']
})
export class ToolbarIzquierdaComponent implements OnInit {

  @Input() showMenuOption: boolean;
  @Output() clickedDrawer = new EventEmitter<void>();
  @Output() busqueda = new EventEmitter<string>();
  @Input() ismovil: boolean;
  buscando: boolean = true;
  texto: string;
  constructor() {
    this.buscando = false;
  }

  ngOnInit() {

  }

  clickDrawer() {
    this.clickedDrawer.emit();
  }

  buscar() {
    this.busqueda.emit(this.texto);
  }


}
