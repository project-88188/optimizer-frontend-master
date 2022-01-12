import { Injectable } from '@angular/core';

const USER_TRANSECTION_KEY = 'user-transection';
const USER_SOLUTION_KEY = 'user-solution';
const USER_PRODUCT_KEY = 'user-product';
const USER_GUI_KEY = 'user-gui';

export interface GUI_MODEL {
  BUTT_TAB_INDEX:any
}

@Injectable({
  providedIn: 'root'
})
export class ContentStorageService {

  constructor() { }

  //#region  GUI

  public saveGUI(value: any): void {
    window.localStorage.removeItem(USER_GUI_KEY);
    window.localStorage.setItem(USER_GUI_KEY, JSON.stringify(value));
  }

  public getGUI(): any | null {
    const value = window.localStorage.getItem(USER_GUI_KEY);
    if (value) {
      return JSON.parse(value);
    }

    return {}
  }

  //#endregion

  //#region TRANSECTION

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

  //#endregion

  //#region  PRODUCT

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

  //#endregion

  //#region SOLUTION

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

  //#endregion

}
