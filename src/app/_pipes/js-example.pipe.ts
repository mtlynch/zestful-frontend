import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsExample',
})
export class JsExamplePipe implements PipeTransform {

  transform(ingredientRaw: string, backendUrl: string): any {
    const ingredientEscaped = ingredientRaw.replace(/'/g, '\\\'');
    return `
var ingredientsRaw = [
  "${ingredientEscaped}"
];
fetch("${backendUrl}/parseIngredients", {
    method : "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": ingredientsRaw
    })
}).then(
    function(response) {
      // Check for successful response from Zestful server.
      if (response.status !== 200) {
        console.log('Error talking to Zestful server: ' + response.status);
        return;
      }

      // Process the response from Zestful.
      response.json().then(function(data) {

        // Check for application-level errors.
        if (data.error) {
          console.log(\`Failed to process ingredients: \$\{ data.error\ } \`);
          return;
        }

        // Iterate through each ingredient result.
        data.results.forEach(function(result) {

            // Check if Zestful processed this ingredient successfully.
            if (result.error) {
              console.log(
                \`Error processing ingredient \$\{ result.ingredientRaw\ }: \$\{ result.error\ } \`);
              return;
            }

            // TODO: Handle ingredient result
            var parsed = result.ingredientParsed;
            console.log(\`Quantity: \$\{parsed.quantity\}\`);
            console.log(\`Unit: \$\{parsed.unit\}\`);
            console.log(\`Product Size Modifier: \$\{parsed.productSizeModifier\}\`);
            console.log(\`Product: \$\{parsed.product\}\`);
            console.log(\`Preparation Notes: \$\{parsed.preparationNotes\}\`);
            console.log(\`Confidence: \$\{result.confidence\}\`);
        });
      });
    }
);`.trim();
  }

}
