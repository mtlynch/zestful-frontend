import { Component, OnInit } from '@angular/core';
import { IngredientParsed } from '../../_models/parse-result';
import { ParserService } from '../../_services/parser.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  ingredientRaw: string;
  ingredientParsed: IngredientParsed;

  constructor(private parserService: ParserService) { }

  ngOnInit() {}

  parse(raw: string) {
    this.parserService.parseIngredient(raw).subscribe(
      (response) => {
        this.ingredientParsed = response.ingredientParsed;
      },
      (error) => {
        console.log(error);
      });
  }

}
