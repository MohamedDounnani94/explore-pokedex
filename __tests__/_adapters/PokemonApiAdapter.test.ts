import PokemonApiAdapter from "../../src/_adapters/PokemonApiAdapter";

describe("PokemonAdapter get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    const _pokemon = await PokemonApiAdapter.getPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

});