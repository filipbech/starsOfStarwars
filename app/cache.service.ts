import { Injectable } from '@angular/core';

@Injectable()
export class Cache {
    private localStoragePrefix = 'starWars-';

    isCached(id: string): boolean {
        const key = this.getStorageKey(id);
        return !!localStorage.getItem(key);
    }

    getCache(id: string): any {
        const key = this.getStorageKey(id);
        const jsonValue = localStorage.getItem(key);
        return JSON.parse(jsonValue);
    }

    setCache(id: string, value: any) {
        const key = this.getStorageKey(id);
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }

    getCollection(): any[] {
        return this.getCache('collection');
    }

    isCollectionCached(): boolean {
        return !!this.getCollection();
    }

    private getStorageKey(key: string): string {
        return `${this.localStoragePrefix}${key}`;
    }
}
