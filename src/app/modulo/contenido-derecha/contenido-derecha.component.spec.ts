import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDerechaComponent } from './contenido-derecha.component';

describe('ContenidoDerechaComponent', () => {
  let component: ContenidoDerechaComponent;
  let fixture: ComponentFixture<ContenidoDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
