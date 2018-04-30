export class IngredientParsed {
  constructor(
        public quantity?: number,
        public unit?: string,
        public name?: string,
        public other?: string,
        public comment?: string) {}
}

export class ParseResult {
  constructor(public ingredientParsed?: IngredientParsed, public error?: string) {}
}
