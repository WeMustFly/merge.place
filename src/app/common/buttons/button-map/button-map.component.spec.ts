import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMapComponent } from './button-map.component';

describe('ButtonMapComponent', () => {
  let component: ButtonMapComponent;
  let fixture: ComponentFixture<ButtonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
