export class APIError extends Error {
  constructor(status: number, message: string) {
    super(`Status code: ${status}\nMessage: ${message}`);

    Object.setPrototypeOf(this, APIError.prototype);
  }
}
