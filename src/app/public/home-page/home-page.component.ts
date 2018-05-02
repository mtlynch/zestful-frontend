import { Component, OnInit } from '@angular/core';

import { IngredientParsed, ParseResult } from '../../_models/parse-result';
import { ParserService } from '../../_services/parser.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  ingredientRaw: string;
  isWaitingForParseResult: boolean = false;
  parseResult: ParseResult;
  error: string;

  constructor(private parserService: ParserService) { }

  ngOnInit() {}

  parse(raw: string) {
    this.isWaitingForParseResult = true;
    this.error = null;
    this.parseResult = null;
    this.parserService.parseIngredient(raw).subscribe(
      (response) => {
        this.isWaitingForParseResult = false;
        this.parseResult = response;
        if (this.parseResult.error) {
          this.error = this.parseResult.error;
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
    this.parseResult = null;
  }

  private isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

}
