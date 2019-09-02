import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-derecha',
  templateUrl: './toolbar-derecha.component.html',
  styleUrls: ['./toolbar-derecha.component.scss']
})
export class ToolbarDerechaComponent implements OnInit {

  //@Input() formaPago: FormaPago;
  @Input() anchocontenido: number;
  @Input() showToolbar: boolean;
  @Output() clickedDrawer = new EventEmitter<void>();
  @Output() onclickedBack = new EventEmitter<void>();

  @Input() ismovil: boolean;

  constructor() {

  }

  onResize() { }

  ngOnInit() {
    this.onResize();
  }
  clickDrawer() {
    this.clickedDrawer.emit();
  }

  clickBack() {
    this.onclickedBack.emit();
  }

}
