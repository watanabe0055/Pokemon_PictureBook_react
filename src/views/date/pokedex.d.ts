declare module "./pokedex.json" {
  interface TestData {
    id: number;
    name: {
      english: string;
      japanese: string;
      chinese: string;
      french: string;
    };
    type: string[];
    base: {
      HP: number;
      Attack: number;
      Defense: number;
      "Sp. Attack": number;
      "Sp. Defense": number;
      Speed: number;
    };
  }
  const value: TestData;
  export = value;
}

export default PokemonDateFetch;
