import IPokemon from '../models/Pokemon';
import PokemonRepository from '../_ports/PokemonRepository';

export default class PokemonDomain {
  static async getPokemonByName(name: string): Promise<IPokemon> {
    return PokemonRepository.getPokemonByName(name);
  }

  static async getTranslatedPokemonByName(name: string): Promise<IPokemon> {
    const pokemon = await PokemonRepository.getPokemonByName(name);
    return pokemon;
  }
}
