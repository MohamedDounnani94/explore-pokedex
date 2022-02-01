import PokemonApiAdapter from "../../src/_adapters/PokemonApiAdapter";
import PokemonRepository from '../../src/_ports/PokemonRepository'

jest.mock("../../src/_adapters/PokemonApiAdapter");

const pokemonApiAdapter = PokemonApiAdapter as jest.Mocked<typeof PokemonApiAdapter>;

describe("PokemonRepository get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
      habitat: 'rare',
      isLegendary: true
    }

    const pokemonResult = {
      name: 'MeoTwo',
      flavor_text_entries: [ { flavor_text: "Mewtwo is a Pokémon that was created by genetic\n"+
      "manipulation. However, even though the scientific power\n" +
      "of humans created this Pokémon’s body, they failed to\n" +
      "endow Mewtwo with a compassionate heart."} ],
      habitat: { name: 'rare' },
      is_legendary: true
    }

    pokemonApiAdapter.getPokemonByName.mockResolvedValue(pokemonResult);

    const _pokemon = await PokemonRepository.getPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

});