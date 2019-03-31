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
    "3 large Granny Smith apples",
    "1 1/2 cups finely chopped red onions",
    "½ tsp brown sugar"
  ]
}`.substring(1);

  public responseExample: string = `
{
  "results": [
    {
      "ingredientRaw": "3 large Granny Smith apples",
      "ingredientParsed": {
        "quantity": 3.0,
        "unit": null,
        "productSizeModifier": "large",
        "product": "Granny Smith apples",
        "preparationNotes": null
      },
      "error": null
    },
    {
      "ingredientRaw": "1 1/2 cups finely chopped red onions",
      "ingredientParsed": {
        "quantity": 1.5,
        "unit": "cup",
        "productSizeModifier": null,
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
        "productSizeModifier": null,
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
