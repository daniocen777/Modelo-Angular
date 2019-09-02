import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThonyComponent } from './thony.component';

describe('ThonyComponent', () => {
  let component: ThonyComponent;
  let fixture: ComponentFixture<ThonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
