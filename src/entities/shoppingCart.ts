import { Product } from "./product";

export class ShoppingCart {
    private _products: Product[] = [];
    private _totalValue: number = 0;

    addToCart(product: Product) {
        const inCart = this._products.includes(product);
        if (!inCart) {
            this._products.push(product)
        }

        this.orderTotal(product);
        this.toHtml();
    }

    orderTotal(product: Product) {
        this._totalValue = product.productPrice * product.quantity;
    }

    increaseProductCount(product: Product) {
        product.quantity++;
        this.addToCart(product)
    }

    decreaseProductCount(product: Product) {
        product.quantity--;
        this.orderTotal(product);
    }

    toHtml() {
        const cartContainer = document.getElementById("your-cart");
        if (!cartContainer) return;

        const cartHtml = document.createElement("div")
        const cart = new ShoppingCart();

        cartHtml.innerHTML = `<div class="cart-count"><h2>Your Cart (7)</h2></div>
            <div class="products-in-cart">
            <div class="product-name-cart">${cart._products[0].productName}</div>
            <span>1x</span>
            <span class="unitary-value">@ $${cart._products[0].productPrice}</span>
            <span class="total-value">$${cart._totalValue}</span>
            </div>
            <div class="flex">
            <div>Order total</div>
            <h2>$5.50</h2>
        </div>`




    const addToCartBttn = document.querySelector("#button-add-to-cart");
    addToCartBttn?.addEventListener("click", () => cart.increaseProductCount(this._products[0]))
       

        cartContainer.appendChild(cartHtml)
    }
}