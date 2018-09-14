import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentCardComponent } from './resident-card.component';

describe('ResidentCardComponent', () => {
  let component: ResidentCardComponent;
  let fixture: ComponentFixture<ResidentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
