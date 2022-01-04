import { Injectable } from '@angular/core';

const USER_CONTENT_KEY = 'user-content';
const USER_TRANSECTION_KEY = 'user-transection';
const USER_SOLUTION_KEY = 'user-solution';
const USER_PRODUCT_KEY = 'user-product';

@Injectable({
  providedIn: 'root'
})
export class ContentStorageService {

  constructor() { }

  public saveContent(value: any): void {
    window.sessionStorage.removeItem(USER_CONTENT_KEY);
    window.sessionStorage.setItem(USER_CONTENT_KEY, JSON.stringify(value));
  }

  public getContent(): any | null {
    const value = window.sessionStorage.getItem(USER_CONTENT_KEY);
    if (value) {
      return JSON.parse(value);
    }

    return {}
  }

  public saveTransections(value: any): void {
    window.sessionStorage.removeItem(USER_TRANSECTION_KEY);
    window.sessionStorage.setItem(USER_TRANSECTION_KEY, JSON.stringify(value));
  }

  public getTransections(): any | null {
    const value = window.sessionStorage.getItem(USER_TRANSECTION_KEY);
    if (value) {
      return JSON.parse(value);
    }

    return {}
  }

  public saveProducts(value: any): void {
    window.sessionStorage.removeItem(USER_PRODUCT_KEY);
    window.sessionStorage.setItem(USER_PRODUCT_KEY, JSON.stringify(value));
  }

  public getProducts(): any | null {
    const value = window.sessionStorage.getItem(USER_PRODUCT_KEY);
    if (value) {
      return JSON.parse(value);
    }

    return {}
  }

  public saveSolutions(value: any): void {
    window.sessionStorage.removeItem(USER_SOLUTION_KEY);
    window.sessionStorage.setItem(USER_SOLUTION_KEY, JSON.stringify(value));
  }

  public getSolutions(): any | null {
    const value= window.sessionStorage.getItem(USER_SOLUTION_KEY);
    if (value) {
      return JSON.parse(value);
    }

    return {}
  }

}
