import axios from 'axios';
import { TranslateAuthor, ITranslatorResponse } from '../models/Translation';
import logger from '../utility/logger';
import Exception from '../utility/Exception';

const TRANSLATION_BASE_ENDPOINT = 'https://api.funtranslations.com/translate';

export default class TranslationAdapter {
  static async getFunnyDescription(fromWho: string, text: string): Promise<ITranslatorResponse> {
    const route = fromWho === TranslateAuthor.SHAKESPEARE ? TranslateAuthor.SHAKESPEARE : TranslateAuthor.YODA;

    const translationEndpoint = `${TRANSLATION_BASE_ENDPOINT}/${route}`;
    try {
      logger.debug(`Start to call the translation endpoint: ${translationEndpoint}`);
      const { data } = await axios.post(translationEndpoint, {
        text,
      });
      return data;
    } catch (exception) {
      logger.error('Error in api call something goes wrong');
      throw Exception.generic();
    }
  }
}
