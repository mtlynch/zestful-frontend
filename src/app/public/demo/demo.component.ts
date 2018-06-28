import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { IngredientParsed, ParseResults } from '../../_models/parse-result';
import { ParserService, ParseRequest } from '../../_services/parser.service';
import { CurlCmdPipe } from '../../_pipes/curl-cmd.pipe';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  ingredientRaw: string;
  isWaitingForParseResult: boolean = false;
  ingredientParsed: IngredientParsed;
  error: string;
  requestsRemaining: number = null;
  curlExample: string = null;
  readonly exampleInputs: string[] = [
    '1 1/2 cups finely chopped red onions',
    '½ tsp brown sugar',
    '2 tbsp butter',
  ];

  constructor(private parserService: ParserService, private curlCmdPipe: CurlCmdPipe) { }

  ngOnInit() {}

  parse(raw: string) {
    this.isWaitingForParseResult = true;
    this.error = null;
    this.ingredientParsed = null;
    const request = new ParseRequest([raw]);
    this.parserService.parseIngredients(request).subscribe(
      (response) => {
        this.isWaitingForParseResult = false;
        this.curlExample = this.curlCmdPipe.transform(raw, environment.backendBaseUrl);
        const parseResult = response;
        if (parseResult.error) {
          this.error = parseResult.error;
          this.ingredientParsed = null;
        } else {
          this.ingredientParsed = parseResult.results[0].ingredientParsed;
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

  parseExample(exampleIngredient: string) {
    this.ingredientRaw = exampleIngredient;
    this.parse(exampleIngredient);
  }

  private isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

}
