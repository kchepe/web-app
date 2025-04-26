import { UniqueEntityID } from './unique-entity-id';

export abstract class BaseEntity<T> {
  public readonly id: UniqueEntityID;
  protected readonly props: T;

  protected constructor(props: T, id?: UniqueEntityID) {
    this.id = id ?? new UniqueEntityID();
    this.props = props;
  }

  equals(object?: BaseEntity<T>): boolean {
    if (object === null || object === undefined) return false;
    if (object === this) return true;
    return this.id.equals(object.id);
  }

  toJSON(): unknown {
    return {
      id: this.id.toString(),
      ...this.props,
    };
  }
}
