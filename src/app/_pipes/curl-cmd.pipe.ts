import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curlCmd',
})
export class CurlCmdPipe implements PipeTransform {

  transform(ingredientRaw: string, backendUrl: string): any {
    const ingredientEscaped = ingredientRaw.replace(/'/g, '\\\'');
    return `
curl \\
  --header "Content-Type: application/json" \\
  --data '{
    "ingredients": [
      "${ingredientEscaped}"
    ]
  }' \\
  "${backendUrl}/parseIngredients"
`.trim();
  }

}
