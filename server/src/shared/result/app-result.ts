import { Result, Ok, Err } from 'ts-results';

export { Result, Ok, Err };

export async function tryCatch<T, E>({
  process,
  onError,
}: {
  process: () => Promise<Result<T, E> | T>;
  onError: (e: unknown) => E;
}): Promise<Result<T, E>> {
  try {
    const result = await process();
    return result instanceof Ok || result instanceof Err ? result : Ok(result);
  } catch (e) {
    return Err(onError(e));
  }
}
