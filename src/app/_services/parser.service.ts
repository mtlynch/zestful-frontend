import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ParseResult } from '../_models/parse-result';

@Injectable()
export class ParserService {

  constructor(private http:HttpClient) { }

  public parseIngredient(ingredientRaw: string) : Observable<ParseResult> {
    return this.http.get<ParseResult>(`${environment.backendBaseUrl}/v1/parse`, {
      params: new HttpParams().set('q', ingredientRaw),
    });
  }

}
