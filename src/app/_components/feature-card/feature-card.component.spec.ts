import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FeatureCardComponent } from './feature-card.component';

describe('FeatureCardComponent', () => {
  let component: FeatureCardComponent;
  let fixture: ComponentFixture<FeatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
