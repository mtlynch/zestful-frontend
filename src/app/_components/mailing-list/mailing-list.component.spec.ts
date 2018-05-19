import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MailingListComponent } from './mailing-list.component';

describe('MailingListComponent', () => {
  let component: MailingListComponent;
  let fixture: ComponentFixture<MailingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailingListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
