export interface GlobalState<T> {
  entities: { [key: string]: T };
  ids: string[];
}
