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

  constructor(private parserService: ParserService) { }

  ngOnInit() {}

  parse(raw: string) {
    this.isWaitingForParseResult = true;
    this.parserService.parseIngredient(raw).subscribe(
      (response) => {
        this.isWaitingForParseResult = false;
        this.parseResult = response;
      },
      (error) => {
        this.isWaitingForParseResult = false;
        console.log(error);
      });
  }

}
