import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eec170Component } from './eec170.component';

describe('Eec170Component', () => {
  let component: Eec170Component;
  let fixture: ComponentFixture<Eec170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eec170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eec170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
