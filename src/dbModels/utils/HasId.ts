/**
 * Model id MUST be an IDBValidKey, or we would not be able to use these ids as keys and query them then.
 */
export default interface HasId<T extends IDBValidKey> {
    readonly id: T,
}
