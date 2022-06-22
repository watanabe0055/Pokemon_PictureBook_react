// pokedex.jsonを受け取る為の型定義
declare module "./pokedex.json" {
  interface Pokemon {
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
      SpAttackk: number;
      SpDefense: number;
      Speed: number;
    };
  }
  const value: Data;
  export = value;
}

export default PokemonDateFetch;
