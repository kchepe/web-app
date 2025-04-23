export class EmailVo {
  private constructor(private readonly _email: string) {}

  static create(rawEmail: string): EmailVo {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(rawEmail)) {
      throw new Error('Invalid email format');
    }

    return new EmailVo(rawEmail.toLowerCase());
  }

  get value(): string {
    return this._email;
  }
}
