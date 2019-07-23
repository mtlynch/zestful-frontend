export class UsdaInfo {
  constructor(
    public fdcId?: string,
    public matchMethod?: string,
    public category?: string,
    public description?: string) { }
}

export class IngredientParsed {
  constructor(
    public quantity?: number,
    public unit?: string,
    public productSizeModifier?: string,
    public product?: string,
    public preparationNotes?: string,
    public usdaInfo?: UsdaInfo) { }
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
