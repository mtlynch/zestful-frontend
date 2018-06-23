import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ParseResults } from '../_models/parse-result';

export class ParseRequest {
  constructor(
    public ingredients?: string[],
  ) {}
}

@Injectable()
export class ParserService {

  constructor(private http:HttpClient) { }

  public parseIngredients(request: ParseRequest) : Observable<ParseResults> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<ParseResults>(
      `${environment.backendBaseUrl}/parseIngredients`, request, httpOptions);
  }

}
