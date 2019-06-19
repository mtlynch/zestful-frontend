import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { IngredientParsed, ParseResults } from '../../_models/parse-result';
import { ParserService, ParseRequest } from '../../_services/parser.service';
import { CurlCmdPipe } from '../../_pipes/curl-cmd.pipe';
import { JsExamplePipe } from '../../_pipes/js-example.pipe';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  ingredientRaw: string;
  isWaitingForParseResult: boolean = false;
  ingredientParsed: IngredientParsed;
  confidence: number;
  error: string;
  requestsRemaining: number = null;
  curlExample: string = null;
  jsExample: string = null;
  readonly exampleInputs: string[] = [
    '2 1/2 tablespoons finely chopped parsley',
    '½ tsp brown sugar',
    '3 large Granny Smith apples',
  ];

  constructor(
    private readonly parserService: ParserService,
    private readonly curlCmdPipe: CurlCmdPipe,
    private readonly jsExamplePipe: JsExamplePipe) { }

  ngOnInit() { }

  parse(raw: string) {
    this.isWaitingForParseResult = true;
    this.error = null;
    this.ingredientParsed = null;
    const request = new ParseRequest([raw]);
    this.parserService.parseIngredients(request).subscribe(
      (response) => {
        this.isWaitingForParseResult = false;
        this.curlExample = this.curlCmdPipe.transform(raw, environment.backendBaseUrl);
        this.jsExample = this.jsExamplePipe.transform(raw, environment.backendBaseUrl);
        const parseResult = response;
        if (parseResult.error) {
          this.error = parseResult.error;
          this.confidence = null;
          this.ingredientParsed = null;
        } else {
          this.ingredientParsed = parseResult.results[0].ingredientParsed;
          this.confidence = parseResult.results[0].confidence;
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
    this.confidence = null;
    this.error = null;
    this.curlExample = null;
    this.jsExample = null;
  }

  parseExample(exampleIngredient: string) {
    this.ingredientRaw = exampleIngredient;
    this.parse(exampleIngredient);
  }

  private isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

}
