import { hash, compare } from 'bcryptjs';

export class PasswordVo {
  private constructor(
    private readonly _value: string,
    private readonly hashed: boolean
  ) {}

  static async create(raw: string, shouldHash = true): Promise<PasswordVo> {
    if (raw.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    if (shouldHash) {
      const hashed = await hash(raw, 10);
      return new PasswordVo(hashed, true);
    }

    return new PasswordVo(raw, false);
  }

  get value(): string {
    return this._value;
  }

  isHashed(): boolean {
    return this.hashed;
  }

  async compareWith(plainText: string): Promise<boolean> {
    return compare(plainText, this.value);
  }
}
