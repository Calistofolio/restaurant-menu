import { Product } from "./product";

export class ShoppingCart {
    private _products: Product[] = [];
    private _totalValue: number = 0;

    addToCart(product: Product) {
        this._totalValue += product.productPrice;
        this._products.push(product)
    } 
}