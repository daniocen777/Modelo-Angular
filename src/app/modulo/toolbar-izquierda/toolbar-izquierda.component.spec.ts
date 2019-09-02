import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarIzquierdaComponent } from './toolbar-izquierda.component';

describe('ToolbarIzquierdaComponent', () => {
  let component: ToolbarIzquierdaComponent;
  let fixture: ComponentFixture<ToolbarIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
