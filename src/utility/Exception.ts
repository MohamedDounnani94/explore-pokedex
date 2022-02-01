/**
 * Define the basic fields for an exception.
 */
export interface IException {
  code: string;
  message: string;
  stacktrace?: any;
}

/**
 * Define a generic exception.
 */
export class SException extends Error implements IException {
  code: string;

  /**
   * Create a new instance of {@link SException} object.
   * @params {@link IException}
   */
  constructor(exception: IException) {
    super(exception.message);
    super.stack = exception.stacktrace ? exception.stacktrace : new Error().stack;
    this.code = exception.code;
  }
}

/**
 * Factory class to create an instance of an {@link IException}.
 */
export default class Exception {
  /**
   * Create an exception to throw when a required field is missing.
   * @param parameter Required missing field. If null the string "The input object parameter is mandatory" will be used.
   * @param stacktrace Stacktrace of the error.
   * @returns Instance of {@link IException}
   */
  static mandatory(parameter?: string): IException {
    let message = 'The input object parameter is mandatory';

    if (message) {
      message = `The parameter ${parameter} is mandatory`;
    }

    return new SException({
      code: '400',
      message,
      stacktrace: undefined,
    });
  }

  /**
   * Create an exception to throw when there is a generic error.
   * @param stacktrace Stacktrace of the error.
   * @param message Understandable message to understand what is happening.
   * @returns Instance of {@link IException}
   */
  static generic(stacktrace?: any, message?: string): IException {
    return new SException({
      code: '500',
      message: message || 'Generic error',
      stacktrace,
    });
  }

  /**
   * Create an exception to throw when an object is not found.
   * @param objectName Name of the object.
   * @param objectId   Id of the object.
   * @returns Object {@link IException}
   */
  static notFound(objectName: string, objectId: string): IException {
    return new SException({
      code: '404',
      message: `The ${objectName} with id "${objectId}" was not found`,
    });
  }
}
