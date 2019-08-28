import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  columnastotales: number = 2;
  columnaPanel: number = 1;

  altocontenido: number = 0;
  anchocontenido: number = 0;
  autenticado: boolean;
  ismobil: boolean;

  showColumnaDerecha: boolean = true;
  showColumnaIzquierda: boolean = true;

  panelActual: number = 1;

  modulos = [
    { titulo: "Título 1", descripcion: "Descripción 1" },
    { titulo: "Título 2", descripcion: "Descripción 2" },
    { titulo: "Título 3", descripcion: "Descripción 3" },
    { titulo: "Título 4", descripcion: "Descripción 4" },
    { titulo: "Título 5", descripcion: "Descripción 5" },
    { titulo: "Título 6", descripcion: "Descripción 6" },
    { titulo: "Título 7", descripcion: "Descripción 7" }
  ];

  constructor() {
    this.autenticado = true;

  }

  ngOnInit() {
    this.verificarTamanos()
  }

  onResize(event) {
    this.verificarTamanos();
  }



  verificarTamanos() {
    this.altocontenido = (window.innerHeight - 64);
    this.anchocontenido = (window.innerWidth);

    if (window.innerWidth > 1800) {
      this.ismobil = false;
      this.columnastotales = 4;
      this.columnaPanel = 1;
    } else if (window.innerWidth > 1200) {
      this.ismobil = false;
      this.columnastotales = 2;
      this.columnaPanel = 1;
    } else if (window.innerWidth > 800) {
      this.ismobil = false;
      this.columnastotales = 2;
      this.columnaPanel = 1;
    } else if (window.innerWidth > 480) {
      this.ismobil = true;
      this.columnastotales = 1;
      this.columnaPanel = 1;
    } else {
      this.ismobil = true;
      this.columnastotales = 1;
      this.columnaPanel = 1;
    }
  }

}
