import PokemonApiAdapter from "../../src/_adapters/PokemonApiAdapter";
import PokemonRepository from '../../src/_ports/PokemonRepository'

jest.mock("../../src/_adapters/PokemonApiAdapter");

const pokemonApiAdapter = PokemonApiAdapter as jest.Mocked<typeof PokemonApiAdapter>;

describe("PokemonRepository get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonApiAdapter.getPokemonByName.mockResolvedValue(pokemon);

    const _pokemon = await PokemonRepository.getPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

});