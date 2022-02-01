export enum TranslateAuthor {
  YODA = 'yoda',
  SHAKESPEARE = 'shakespeare',
}

interface Translator {
  translated: string;
  text: string;
  translation: string;
}

interface Success {
  total: string;
}

export interface ITranslatorResponse {
  success: Success;
  contents: Translator;
}
