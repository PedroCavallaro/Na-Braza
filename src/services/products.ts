import { Product } from "@/@types/types";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";

export async function getAllWhitoutPromo() {
    const response: AxiosResponse<Product[]> = await api.get("/product");
    return response.data;
}
export async function getAllWithPromo() {
    const response: AxiosResponse<Product[]> = await api.get("/product/promo");
    return response.data;
}
