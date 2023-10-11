import { api } from "@/lib/api";

export async function getAllWhitoutPromo() {
    const response = await api.get("/product");
    return response.data;
}
export async function getAll() {
    const response = await api.get("/product/all");
    return response.data;
}
