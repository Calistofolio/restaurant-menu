import { Product } from "./product";

export class ShoppingCart {
    private _products: Product[] = [];
    private _totalValue: number = 0;

    addToCart(product: Product) {
        const inCart = this._products.includes(product);
        if(!inCart){
            this._products.push(product)
        }
        
    } 

    orderTotal(product: Product){
        this._totalValue = product.productPrice * product.quantity;
    }

    increaseProductCount(product: Product){
        product.quantity++;
        this.orderTotal(product)
        this.addToCart(product)
    }

    decreaseProductCount(product: Product){
        product.quantity--;
        this.orderTotal(product);
    }
}