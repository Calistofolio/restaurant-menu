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

        const totalQuantityHtml = cartContainer.querySelector("#total-quantity")

        if (!totalQuantityHtml) return;
        totalQuantityHtml.textContent = this._products[0].quantity.toString();

        let ulProductsHTML = cartContainer.querySelector("ul");

        if (ulProductsHTML) {
          ulProductsHTML.innerHTML = "";
        } else {
          ulProductsHTML = document.createElement("ul");
        }
    
        for (const product of this._products) {
          const liProductHTML = document.createElement("li");
    

        const cart = new ShoppingCart();

        for (const product of this._products) {
            const liProductHTML = document.createElement("li");
      
            const productHTML = `
              <span>${this._products[0].productName}</span>
              <div>
                <span>${this._products[0].quantity}x</span>
                <span>@$${this._products[0].productPrice}</span>
                <span>$${this._totalValue}</span>
              </div>
            `;
      
            liProductHTML.innerHTML = productHTML;
            ulProductsHTML.appendChild(liProductHTML);
          }
    


        cartContainer.appendChild(ulProductsHTML);
        }
    }
 }
