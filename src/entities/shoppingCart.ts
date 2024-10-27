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
        
        this.calculateTotal();
    }

    static removeFromCart(product: Product, element?: Element, element2?: Element){
        const index = this._products.indexOf(product)
        if(index >= 0){
          this._products.splice(index, 1)
          product.quantity = 0
          
          element?.classList.toggle("hidden")
        element2?.classList.toggle("hidden")
        }

        this.calculateTotal();
      }

    static calculateTotal() {
        this._orderValue = 0;
        this._totalQuantity = 0;
        
        for(const product of this._products){
          this._orderValue += product.totalValue;
          this._totalQuantity += product.quantity;
        }
        this.toHtml();
    }

    static toHtml() {
        const cartContainer = document.getElementById("your-cart");
        if (!cartContainer) return;

        const totalQuantityHtml = cartContainer.querySelector("#total-quantity")

        if (!totalQuantityHtml) return;
        totalQuantityHtml.textContent = this._totalQuantity.toString();

        const totalValueHtml = cartContainer.querySelector("#total-value")

        if (!totalValueHtml) return;
        totalValueHtml.innerHTML = "$" + this._orderValue.toFixed(2);
       

        let ulProductsHTML = cartContainer.querySelector("ul")

        if (ulProductsHTML) {
          ulProductsHTML.innerHTML = "";
        } else {
          ulProductsHTML = document.createElement("ul");
        }

        for (const product of this._products) {
            const liProductHTML = document.createElement("li");
      
            const productHtml = `
              <span class="product-name">${product.productName}</span>
              <button id="buttom-remove-from-cart" type="button">
                <div class="fa fa-times-circle-o fa-2x text-color-tertiary"></div>
               </button>
              <div class="border-b-2 py-3">
                <span>${product.quantity}x</span>
                <span class="unitary-value px-1">@$${product.productPrice.toFixed(2)}</span>
                <span class="total-value ">$${product.totalValue.toFixed(2)}</span>
              </div>
             
            `;

          
         
            liProductHTML.classList.add("pt-5")
            liProductHTML.innerHTML = productHtml;
            ulProductsHTML.appendChild(liProductHTML);
            const rmvToCartBttn = liProductHTML.querySelector("#buttom-remove-from-cart");
            rmvToCartBttn?.addEventListener("click", () => this.removeFromCart(product))
        }

        const modal = document.querySelector("#modal")
        const btnOpenModal = document.querySelector("#open-modal")
        const btnCloseModal = document.querySelector("#close-modal")
        btnOpenModal?.addEventListener("click", () => modal?.classList.remove('hidden'))
        btnCloseModal?.addEventListener("click", () => modal?.classList.add('hidden'))

          cartContainer.insertBefore(ulProductsHTML, totalValueHtml)
        }

        static get products() {
          return this._products;
        }

        static get total() {
          return this._orderValue;
        }
        
    }
 
