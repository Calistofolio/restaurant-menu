import { Product } from "./product";

export class ShoppingCart {
    private _products: Product;
    private _totalValue: number;

    constructor(product: Product, totalValue: number) {
        this._products = product;
        this._totalValue = totalValue;
    }

    
}