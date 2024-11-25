import { StateStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { logOnDev } from "~/utils/logger";

const storage = SecureStore;

export const zustandStorage: StateStorage = {
    setItem: (name, value) => {
        logOnDev("zustandStorage", "setItem successful");
        return storage.setItemAsync(name, value);
    },
    getItem: (name) => {
        const value = storage.getItemAsync(name);
        logOnDev("zustandStorage", "getItem successful");
        return value ?? null;
    },
    removeItem: (name) => {
        logOnDev("zustandStorage", "removeItem successful");
        return storage.deleteItemAsync(name);
    },
};
