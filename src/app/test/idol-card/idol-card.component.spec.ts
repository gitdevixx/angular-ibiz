import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolCardComponent } from './idol-card.component';

describe('IdolCardComponent', () => {
  let component: IdolCardComponent;
  let fixture: ComponentFixture<IdolCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdolCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
