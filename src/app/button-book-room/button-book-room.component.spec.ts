import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBookRoomComponent } from './button-book-room.component';

describe('ButtonBookRoomComponent', () => {
  let component: ButtonBookRoomComponent;
  let fixture: ComponentFixture<ButtonBookRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBookRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
