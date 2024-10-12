import { Product } from "./product";

export class ShoppingCart {
    private static _products: Product[] = [];
    private static _orderValue: number = 0;
    private static _totalQuantity: number = 0;

    static addToCart(product: Product) {
        const inCart = this._products.includes(product);
        
        if (!inCart) {
            this._products.push(product);
        }       
        
        this.orderTotal(product);
        this.toHtml();
    }

    static orderTotal(product: Product) {
        this._orderValue = product.productPrice * product.quantity;
    }


    static toHtml() {
        const cartContainer = document.getElementById("your-cart");
        if (!cartContainer) return;

        // const totalQuantityHtml = cartContainer.querySelector("#total-quantity")

        // if (!totalQuantityHtml) return;
        // totalQuantityHtml.textContent = this._totalQuantity.toString();

        let ulProductsHTML = cartContainer.querySelector("ul")

        if (ulProductsHTML) {
          ulProductsHTML.innerHTML = "";
        } else {
          ulProductsHTML = document.createElement("ul");
        }

        for (const product of this._products) {
            const liProductHTML = document.createElement("li");
      
            const productHtml = `
              <span>${product.productName}</span>
              <div>
                <span>${product.quantity}x</span>
                <span>@$${product.productPrice}</span>
                <span>$${this._orderValue}</span>
              </div>
            `;
      
            liProductHTML.innerHTML = productHtml;
            ulProductsHTML.appendChild(liProductHTML);
          }

          cartContainer.appendChild(ulProductsHTML);
        }

        static get products() {
          return this._products;
        }

        static get total() {
          return this._orderValue;
        }
        
        
    }
 
