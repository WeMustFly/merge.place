import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMembershipComponent } from './button-membership.component';

describe('ButtonMembershipComponent', () => {
  let component: ButtonMembershipComponent;
  let fixture: ComponentFixture<ButtonMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
