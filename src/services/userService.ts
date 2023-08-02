import {IValues} from "../types/User.ts";

export const saveDataToLocalStorage = (key: string, userData: IValues) => {
    localStorage.setItem(key, JSON.stringify(userData));
};