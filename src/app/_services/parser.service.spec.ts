import { TestBed, inject } from '@angular/core/testing';
import { HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

import { ParserService } from './parser.service';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { ParseResult, IngredientParsed } from '../_models/parse-result';

describe('ParserService', () => {
  let service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParserService],
    });
    service = TestBed.get(ParserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the parse results', () => {
    const mockResult = {
      ingredientParsed: {
        quantity: 2.0,
        unit: 'tablespoon',
        product: 'Parmesan cheese',
        preparationNotes: 'shaved',
      },
    };

    service.parseIngredient('2 tablespoons shaved Parmesan cheese').subscribe((parseResult) => {
      expect(parseResult).toEqual(mockResult);
    });

    httpMock.expectOne((request: HttpRequest<any>) => {
      return request.method === 'GET'
        && request.url === `${environment.backendBaseUrl}/v1/parse`
        && request.params.get('q') === '2 tablespoons shaved Parmesan cheese';
    }).flush(mockResult);
  });
});
