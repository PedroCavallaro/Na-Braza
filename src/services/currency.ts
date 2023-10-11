export function formatCurrency(val: number) {
    return new Intl.NumberFormat("pt-BR", {
        currency: "BRl",
        style: "currency",
    }).format(val);
}
