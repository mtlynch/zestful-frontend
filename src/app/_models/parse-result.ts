export class IngredientParsed {
  constructor(
        public quantity?: number,
        public unit?: string,
        public product?: string,
        public preparationNotes?: string) {}
}

export class ParseResult {
  constructor(
    public ingredientParsed?: IngredientParsed,
    public error?: string,
    public requestsRemaining?: number) {}
}
