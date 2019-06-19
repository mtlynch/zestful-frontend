export class IngredientParsed {
  constructor(
    public quantity?: number,
    public unit?: string,
    public productSizeModifier?: string,
    public product?: string,
    public preparationNotes?: string) { }
}

export class IngredientResult {
  constructor(
    public ingredientRaw?: string,
    public ingredientParsed?: IngredientParsed,
    public confidence?: number,
    public error?: string) { }
}

export class ParseResults {
  constructor(
    public results?: IngredientResult[],
    public error?: string,
    public requestsRemaining?: number) { }
}
