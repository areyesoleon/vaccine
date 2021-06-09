export interface MasterRes<T> {
  ok: string;
  res: T | T[];
  total: number;
}
