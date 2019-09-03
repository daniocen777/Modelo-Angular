import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenido-derecha',
  templateUrl: './contenido-derecha.component.html',
  styleUrls: ['./contenido-derecha.component.scss']
})
export class ContenidoDerechaComponent implements OnInit {

  @Input() anchocontenido: number;
  @Input() ismovil: boolean;
  @Input() altocontenido: number;

  constructor() { }

  ngOnInit() {
  }

}
