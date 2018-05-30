import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { IngredientParsed, ParseResult } from '../../_models/parse-result';
import { ParserService } from '../../_services/parser.service';
import { CurlCmdPipe } from '../../_pipes/curl-cmd.pipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  ingredientRaw: string;
  isWaitingForParseResult: boolean = false;
  ingredientParsed: IngredientParsed;
  error: string;
  requestsRemaining: number = null;
  curlExample: string = null;

  constructor(private parserService: ParserService, private curlCmdPipe: CurlCmdPipe) { }

  ngOnInit() {}

  parse(raw: string) {
    this.isWaitingForParseResult = true;
    this.error = null;
    this.ingredientParsed = null;
    this.parserService.parseIngredient(raw).subscribe(
      (response) => {
        this.isWaitingForParseResult = false;
        this.curlExample = this.curlCmdPipe.transform(raw, environment.backendBaseUrl);
        const parseResult = response;
        if (parseResult.error) {
          this.error = parseResult.error;
          this.ingredientParsed = null;
        } else {
          this.ingredientParsed = parseResult.ingredientParsed;
          this.requestsRemaining = parseResult.requestsRemaining;
          this.error = null;
        }
      },
      (error) => {
        this.isWaitingForParseResult = false;
        console.log(error);
        if (error.error && this.isString(error.error)) {
          this.error = error.error;
        } else {
          this.error = error.statusText;
        }
      });
  }

  reset() {
    this.ingredientRaw = '';
    this.ingredientParsed = null;
    this.error = null;
    this.curlExample = null;
  }

  private isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

}
