import dataTest from "../../date/pokedex";

const PokemonDateFetch: any = (id: number) => {
  console.log(dataTest[id]);
  return dataTest[id];
};

export default PokemonDateFetch;
