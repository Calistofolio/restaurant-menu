import { v4 as uuidv4 } from 'uuid';
import { ShoppingCart } from './shoppingCart';
export class Product{
    private _id: string = uuidv4();
    private _productName: string;
    private _productPrice: number;
    private _productCategory: string;
    private _productImg: string;
    private _quantity: number = 0;
    private _totalValue = 0;

    constructor(productName: string, productPrice: number, productCategory: string, productImg: string){
        this._productName = productName;
        this._productPrice = productPrice;
        this._productCategory = productCategory;
        this._productImg = productImg;
    }

    
    public get productPrice(){
        return this._productPrice;
    }
 
    public set quantity(value: number) {
        this._quantity = value;
    }

    
    public get quantity(){
        return this._quantity;
    }

    
    public get productName(){
        return this._productName;
    }

    
    public get id(){
        return this._id;
    }

    public get totalValue(){
        return  this._totalValue;
    }

    toHtml(){
        const productContainer = document.getElementById("product-list")
        if (!productContainer) return;

        const productHtml = document.createElement("li");
        productHtml.id = this._id;

        productHtml.innerHTML = `
        <div class="rounded-xl flex flex-col h-fit w-[230px]">
            <div class="rounded-xl mb-10 relative h-[100%]">
                <div class=""><img class="rounded-xl h-[100%] " title = "Product Image" src="${this._productImg}" alt=""></div>
                <button id="button-add-to-cart" type="button" class="button rounded-lg font-semibold bg-background-color border-black border-2">
                    <div class="fa fa-cart-plus text-color-primary px-1"></div>
                    <span>Add to Cart</span>
                </button>
                <div id="product-selected" class="button hidden rounded-lg font-semibold bg-color-primary">
                    <button type="button" id="button-reduce-quantity" class="fa fa-minus mx-3"></button>
                    <span id="selected-quantity" class="mx-4">${this._quantity}</span>
                    <button id="button-increment-quantity" type="button" class="fa fa-plus mx-3"></button>
                </div>
            </div>

            <div class="flex flex-col m-[10px] ">
                <span class="text-color-tertiary text-sm">${this._productCategory}</span>
                <span class="product-name">${this._productName}</span>
                <span class="product-price">$${this._productPrice.toFixed(2)}</span>
            </div>
        </div>
    `;

    const addToCartBttn = productHtml.querySelector("#button-add-to-cart");
    const selectedBttn = productHtml.querySelector("#product-selected")
    const incrementToCartBttn = productHtml.querySelector("#button-increment-quantity");
    const reduceFromCartBttn = productHtml.querySelector("#button-reduce-quantity");
    const buttonQuantity = productHtml.querySelector("#selected-quantity")

    incrementToCartBttn?.addEventListener("click", () => this.increaseProductCount(buttonQuantity!))
    addToCartBttn?.addEventListener("click", () => this.increaseProductCount(buttonQuantity!))
    addToCartBttn?.addEventListener("click", () => this.selectProduct(addToCartBttn, selectedBttn!))
    reduceFromCartBttn?.addEventListener("click", () => this.decreaseProductCount(addToCartBttn!, selectedBttn!, buttonQuantity!))
    
       
        
    productContainer.appendChild(productHtml);
    }

    selectProduct(element: Element, element2: Element){
            element.classList.toggle("hidden")
            element2.classList.toggle("hidden")
    }


    increaseProductCount(element: Element) {
        this._quantity++;
        element.innerHTML = this._quantity.toString();
        this.productsTotalValue();
        ShoppingCart.addToCart(this);
    }

    decreaseProductCount(element: Element, element2: Element, element3: Element) {
        if (this._quantity > 0) {
            this._quantity--;
            element3.innerHTML = this._quantity.toString();
        }
       
        
        if(this._quantity == 0){
            ShoppingCart.removeFromCart(this, element, element2);
        }
        
        this.productsTotalValue();
        ShoppingCart.calculateTotal();
    }

    productsTotalValue(){
        this._totalValue = this._productPrice * this._quantity;
    }

   
}