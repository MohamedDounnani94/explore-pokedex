import PokemonDomain from "../../src/_domains/PokemonDomain";
import PokemonService from '../../src/_ports/PokemonService'

jest.mock("../../src/_domains/PokemonDomain");

const pokemonDomain = PokemonDomain as jest.Mocked<typeof PokemonDomain>;

describe("PokemonService get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonDomain.getPokemonByName.mockResolvedValue(pokemon);

    const _pokemon = await PokemonService.getPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

  test('Should return a Pokemon pedigree with funny description based on his/her name', async () => {
    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonDomain.getTranslatedPokemonByName.mockResolvedValue(pokemon);

    const _pokemon = await PokemonService.getTranslatedPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

});