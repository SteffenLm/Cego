export abstract class LocalStorageManager<T> {
  private cachedValue!: T;

  constructor(
    private readonly key: string,
    private readonly localStorage: Storage
  ) {
    this.initializeLocalStorage();
  }

  protected getValue(): T | null {
    if (this.cachedValue) {
      return this.createDeepCopy(this.cachedValue);
    } else {
      return null;
    }
  }

  protected setValueAndPersist(value: T): void {
    this.parseValueAndSaveToLocalStorage(value);
    this.cachedValue = this.createDeepCopy(value);
  }

  private initializeLocalStorage(): void {
    const persistedValue = this.getValueFromLocalStorage();
    if (persistedValue === null) {
    } else {
      this.cachedValue = JSON.parse(persistedValue);
    }
  }

  private getValueFromLocalStorage(): string | null {
    return this.localStorage.getItem(this.key);
  }

  private parseValueAndSaveToLocalStorage(value: T): void {
    this.localStorage.setItem(this.key, JSON.stringify(value));
  }

  private createDeepCopy(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }
}
