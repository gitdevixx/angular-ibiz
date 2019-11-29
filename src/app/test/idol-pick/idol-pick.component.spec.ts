import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolPickComponent } from './idol-pick.component';

describe('IdolPickComponent', () => {
  let component: IdolPickComponent;
  let fixture: ComponentFixture<IdolPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdolPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
