import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CartItem() {
    const { getByKey, saveItem } = useLocalStorage();
}
