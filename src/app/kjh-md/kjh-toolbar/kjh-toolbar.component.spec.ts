import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KjhToolbarComponent } from './kjh-toolbar.component';

describe('KjhToolbarComponent', () => {
  let component: KjhToolbarComponent;
  let fixture: ComponentFixture<KjhToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KjhToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KjhToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
