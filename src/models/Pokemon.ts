export default interface IPokemon {
  name: string;
  description: string;
  habitat: string;
  isLegendary: boolean;
}
interface IFlavorText {
  flavor_text: string;
}

interface IHabitat {
  name: string
}
export interface IPokemonResponse {
  name: string;
  is_legendary?: boolean;
  habitat?: IHabitat;
  flavor_text_entries?: Array<IFlavorText>;
}
