import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {

  altocontenido: number = 0;

  constructor() { }

  ngOnInit() {
    this.verificarTamanos();
  }


  onResize(event) {
    this.verificarTamanos();
  }

  verificarTamanos() {
    this.altocontenido = window.innerHeight - 64;
  }
}
