import IPokemon from '../models/Pokemon';
import PokemonDomain from '../_domains/PokemonDomain';
import Exception from '../utility/Exception';

export default class PokemonService {
  static async getPokemonByName(name: string): Promise<IPokemon> {
    if (!name) throw Exception.mandatory('name');
    return PokemonDomain.getPokemonByName(name);
  }

  static async getTranslatedPokemonByName(name: string): Promise<IPokemon> {
    if (!name) throw Exception.mandatory('name');
    return PokemonDomain.getTranslatedPokemonByName(name);
  }
}
