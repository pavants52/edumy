import { Injectable } from '@angular/core';

@Injectable()

export class LocalstorageService {

    setData(key: string, data: any): void {
        this.removeIteamData(key);
        localStorage.setItem(key, JSON.stringify(data));
    }

    getData(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    removeIteamData(key: string): void {
        return localStorage.removeItem(key);
    }

    clearData(key: string): void {
        return localStorage.clear();
    }

}