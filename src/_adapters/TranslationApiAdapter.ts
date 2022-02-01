import ITranslation, { TranslateAuthor } from '../models/Translation';
import logger from '../utility/logger';

const TRANSLATION_BASE_ENDPOINT = 'https://api.funtranslations.com/translate/';

export default class TranslatorAdapter {
  /**
   * Adapter function that returns a translated object with a funny description by submitting from who you want to be the author and the description.
   * @param from_who The name of the author {@link TranslateAuthor}.
   * @param description The text that you want to translate.
   * @returns Object {@link ITranslator}.
   * @throws {@link IException}.
  */
  static async getFunnyDescription(from_who: string, description: string): Promise<ITranslation> {
    const route = from_who === TranslateAuthor.SHAKESPEARE ? TranslateAuthor.SHAKESPEARE : TranslateAuthor.YODA;

    this.getFunnyDescriptionByRoute(route, description);

    return {
      translated: 'Force be with you from the other side',
      text: 'hello from the other side',
      translation: 'yoda',
    };
  }

  /**
   * Adapter function that submit a request to an endpoint to get a funny description.
   * @param route aka the author name, that you want to call to get the funny description.
   * @param description the text that you want to translate.
   * @throws {@link IException}.
  */
  static async getFunnyDescriptionByRoute(route: string, description: string): Promise<any> {
    const translationEndpoint = `${TRANSLATION_BASE_ENDPOINT}/${route}`;
    logger.debug({ translationEndpoint, description });
  }
}
