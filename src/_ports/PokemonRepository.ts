import IPokemon from '../models/Pokemon';
import PokemonApiAdapter from '../_adapters/PokemonApiAdapter';

export default class PokemonRepository {
  static async getPokemonByName(name: string): Promise<IPokemon> {
    return PokemonApiAdapter.getPokemonByName(name);
  }
}
