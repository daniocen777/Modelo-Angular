import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDerechaComponent } from './toolbar-derecha.component';

describe('ToolbarDerechaComponent', () => {
  let component: ToolbarDerechaComponent;
  let fixture: ComponentFixture<ToolbarDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
