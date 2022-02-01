import IPokemon from '../models/Pokemon';
import PokemonApiAdapter from '../_adapters/PokemonApiAdapter';

export default class PokemonRepository {
  static async getPokemonByName(name: string): Promise<IPokemon> {
    const data = await PokemonApiAdapter.getPokemonByName(name);
    const description = data.flavor_text_entries.length > 0 ? data.flavor_text_entries[0].flavor_text : '';
    return {
      isLegendary: data.is_legendary,
      name: data.name,
      description: description ? description.replace(/\n|\f/g, ' ') : '',
      habitat: data.habitat?.name,
    };
  }
}
