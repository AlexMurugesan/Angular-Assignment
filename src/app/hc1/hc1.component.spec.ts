import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hc1Component } from './hc1.component';

describe('Hc1Component', () => {
  let component: Hc1Component;
  let fixture: ComponentFixture<Hc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
