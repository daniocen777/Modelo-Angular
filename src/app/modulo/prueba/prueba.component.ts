import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-prueba",
  templateUrl: "./prueba.component.html",
  styleUrls: ["./prueba.component.scss"]
})
export class PruebaComponent implements OnInit {
  columnastotales: number = 2;
  columnasizquierda: number = 1;
  columnasderecha: number = 1;
  altocontenido: number = 0;
  anchocontenido: number = 0;
  autenticado: boolean;
  showToolbarGeneral: boolean;
  ismovil: boolean = false;

  showColumnaDerecha: boolean = true;
  showColumnaIzquierda: boolean = true;

  panelActual: number = 1;

  constructor() {
    this.autenticado = true;
    this.showToolbarGeneral = false;
  }

  ngOnInit() {
    this.verificarTamanos();
  }

  onResize(event) {
    this.verificarTamanos();
  }

  verificarTamanos() {
    this.anchocontenido = window.innerWidth;
    if (this.showToolbarGeneral == null || !this.showToolbarGeneral) {
      this.altocontenido = window.innerHeight;
    } else {
      this.altocontenido = window.innerHeight - 64;
    }
    this.ismovil = false;
    if (window.innerWidth > 1800) {
      this.columnastotales = 12;
      this.columnasizquierda = 2;
      this.columnasderecha = 10;
    } else if (window.innerWidth > 1200) {
      this.columnastotales = 12;
      this.columnasizquierda = 3;
      this.columnasderecha = 9;
    } else if (window.innerWidth > 800) {
      this.columnastotales = 8;
      this.columnasizquierda = 3;
      this.columnasderecha = 5;
    } else if (window.innerWidth > 480) {
      this.columnastotales = 8;
      this.columnasizquierda = 4;
      this.columnasderecha = 4;
    } else {
      this.ismovil = true;
      this.columnastotales = 1;
      this.columnasizquierda = 1;
      this.columnasderecha = 1;
    }
    this.ajustarContenidos();
  }

  ajustarContenidos() {
    if (this.ismovil) {
      switch (
        this.panelActual //En qué panel estoy actualmente?
      ) {
        case 1: //En caso esté usando la lista de usuarios
          this.mostrarSoloPanelIzquierda();
          break;
        case 2: //En caso esté usando el desalle de usuarios
          this.mostrarSoloPanelDerecha();
          break;
        default:
          this.mostrarSoloPanelIzquierda();
          break;
      }
    } else {
      this.mostrarAmbosPaneles();
    }
  }

  mostrarAmbosPaneles() {
    this.showColumnaIzquierda = true;
    this.showColumnaDerecha = true;
    this.panelActual = 1;
  }

  mostrarSoloPanelDerecha() {
    this.showColumnaIzquierda = false;
    this.showColumnaDerecha = true;
  }

  mostrarSoloPanelIzquierda() {
    this.showColumnaIzquierda = true;
    this.showColumnaDerecha = false;
  }
}
