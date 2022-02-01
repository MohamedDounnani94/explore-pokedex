import { TranslateAuthor } from "../../src/models/Translation";
import TranslationApiAdapter from "../../src/_adapters/TranslationApiAdapter";

describe("TranslationAdapter get methods: ", () => {

  test('Should return a Translation object', async () => {

    const description = 'Hold my beer';
    const from_who = TranslateAuthor.YODA

    const translation = {
      translated: 'Force be with you from the other side',
      text: 'hello from the other side',
      translation: 'yoda'
    }

    const _translation = await TranslationApiAdapter.getFunnyDescription(description, from_who)
    expect(_translation).toMatchObject(translation)
  });

});