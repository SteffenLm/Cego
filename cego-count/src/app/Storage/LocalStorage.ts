
export abstract class LocalStorageManager<T> {
    constructor(private readonly key: string) { }

    protected getItem(): T[] {
        const item = localStorage.getItem(this.key);
        if (item === null) {
            const emptyArray: T[] = [];
            this.setItem(emptyArray);
            return emptyArray;
        } else {
            return JSON.parse(item);
        }
    }

    protected setItem(item: T[]): void {
        localStorage.setItem(this.key, JSON.stringify(item));
    }
}
