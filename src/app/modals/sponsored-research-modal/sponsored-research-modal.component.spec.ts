import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredResearchModalComponent } from './sponsored-research-modal.component';

describe('SponsoredResearchModalComponent', () => {
  let component: SponsoredResearchModalComponent;
  let fixture: ComponentFixture<SponsoredResearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredResearchModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredResearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
