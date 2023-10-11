import { Product } from "@/@types/types";
import { parseJSON } from "@/services/json";

export const useLocalStorage = () => {
    function getByKey<T>(key: string) {
        let item = null;
        if (typeof window !== "undefined") {
            item = localStorage.getItem(key);
        }
        return parseJSON<T>(item);
    }
    const saveItem = (key: string, data: unknown) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(data));
        }
    };
    const saveNewItemOnCart = (item: Product) => {
        const items: Array<Product> | undefined = getByKey<[]>("cart");
        items?.push(item);
    };
    return {
        getByKey,
        saveItem,
    };
};
