export const calcOldPrice = (discount: number, price: number) => {
    return Math.floor(price * 100 / (100 - discount));
}