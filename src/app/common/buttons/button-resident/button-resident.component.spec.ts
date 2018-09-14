import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResidentComponent } from './button-resident.component';

describe('ButtonResidentComponent', () => {
  let component: ButtonResidentComponent;
  let fixture: ComponentFixture<ButtonResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
