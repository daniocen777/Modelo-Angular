import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  altocontenido: number = 0;
  @Input() drawerAbierto: boolean;
  @Input() showMenuOption: boolean;
  @Input() showDrawer: boolean;
  @Input() showToolbar: boolean;

  tieneusuario: boolean;

  constructor() { }

  ngOnInit() {
    this.tieneusuario = true;
    this.verificarTamanos();
  }


  onResize(event) {
    this.verificarTamanos();
  }

  verificarTamanos() {
    if (this.showToolbar == null || !this.showToolbar) {
      this.altocontenido = window.innerHeight;
    } else {
      this.altocontenido = window.innerHeight - 64;
    }


  }

  mostrarDrawer() {
    if (this.drawerAbierto == null) this.drawerAbierto = false;
    this.drawerAbierto = !this.drawerAbierto;
  }


}
