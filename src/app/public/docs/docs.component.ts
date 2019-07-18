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
    "2 1/2 tablespoons finely chopped parsley",
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
        "preparationNotes": null,
        "usdaInfo": {
            "category": "Fruits and Fruit Juices",
            "description": "Apples, raw, granny smith, with skin (Includes foods for USDA's Food Distribution Program)",
            "fdcId": "168203",
            "matchMethod": "exact"
        }
      },
      "confidence": 0.9242,
      "error": null
    },
    {
      "ingredientRaw": "2 1/2 tablespoons finely chopped parsley",
      "ingredientParsed": {
        "quantity": 2.5,
        "unit": "tablespoon",
        "productSizeModifier": null,
        "product": "parsley",
        "preparationNotes": "finely chopped",
        "usdaInfo": {
            "category": "Vegetables and Vegetable Products",
            "description": "Parsley, fresh",
            "fdcId": "170416",
            "matchMethod": "exact"
        }
      },
      "confidence": 0.9453,
      "error": null
    },
    {
      "ingredientRaw": "½ tsp brown sugar",
      "ingredientParsed": {
        "quantity": 0.5,
        "unit": "teaspoon",
        "productSizeModifier": null,
        "product": "brown sugar",
        "preparationNotes": null,
        "usdaInfo": {
            "category": "Sweets",
            "description": "Sugars, brown",
            "fdcId": "168833",
            "matchMethod": "exact"
        }
      },
      "confidence": 0.9262,
      "error": null
    }
  ],
  "requestsRemaining": 27,
  "error": null
}`.substring(1);
}
