import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  public requestExample: string = `
{
  "ingredients": [
    "2 tablespoons butter",
    "1 1/2 cups finely chopped red onions",
    "½ tsp brown sugar"
  ]
}`.substring(1);

  public responseExample: string = `
{
  "results": [
    {
      "ingredientRaw": "2 tablespoons butter",
      "ingredientParsed": {
        "quantity": 2.0,
        "unit": "tablespoon",
        "product": "butter",
        "preparationNotes": null
      },
      "error": null
    },
    {
      "ingredientRaw": "1 1/2 cups finely chopped red onions",
      "ingredientParsed": {
        "quantity": 1.5,
        "unit": "tablespoon",
        "product": "red onions",
        "preparationNotes": "finely chopped"
      },
      "error": null
    },
    {
      "ingredientRaw": "½ tsp brown sugar",
      "ingredientParsed": {
        "quantity": 0.5,
        "unit": "teaspoon",
        "product": "brown sugar",
        "preparationNotes": null
      },
      "error": null
    }
  ],
  "requestsRemaining": 27,
  "error": null
}`.substring(1);
}
