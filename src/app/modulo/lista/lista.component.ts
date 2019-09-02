import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Output() onClickedDrawer = new EventEmitter<void>();
  /* @Output() onClickedFormaPago = new EventEmitter<FormaPago>();
  @Output() onClickedEliminar = new EventEmitter<FormaPago>(); */
  @Input() altocontenido: number;
  @Input() anchocontenido: number;
  @Input() ismovil: boolean;

  formasPago: any;

  constructor() { }

  ngOnInit() {
    this.formasPago = null;
  }

  clickDrawer() {
    this.onClickedDrawer.emit();
  }

  getFormasPago(texto?: string) {
    if (texto != null) {
      texto = texto.trim();
      if (texto == "") {
        texto = null;
      }
    }
    /* this.servicioFormaPago.getFormasPago(texto).subscribe(rpta => {
      if (rpta.is_error) {
        this.snackBar.open("¡Hubo un problema obteniendo las formas de pago!", null, { duration: 2000 });
      } else {
        this.formasPago = rpta.obj;
      }
    }); */
  }


}
