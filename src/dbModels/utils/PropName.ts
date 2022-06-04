export type PropName<T, P extends keyof T> = keyof Pick<T, P>;
