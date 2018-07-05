import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ParseResults } from '../../_models/parse-result';
import { ParserService } from '../../_services/parser.service';
import { CurlCmdPipe } from '../../_pipes/curl-cmd.pipe';

import { DemoComponent } from './demo.component';

@Injectable()
export class MockParserService {

  public parseIngredient(ingredientRaw: string) {
    return of<ParseResults>({});
  }
}

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent, CurlCmdPipe],
      imports: [
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        CurlCmdPipe,
        { provide: ParserService, useClass: MockParserService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

