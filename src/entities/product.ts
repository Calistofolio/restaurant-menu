import { v4 as uuidv4 } from 'uuid';
import { ShoppingCart } from './shoppingCart';
export class Product{
    private _id: string = uuidv4();
    private _productName: string;
    private _productPrice: number;
    private _productCategory: string;
    private _productImg: string;
    private _quantity: number = 0;

    constructor(productName: string, productPrice: number, productCategory: string, productImg: string){
        this._id;
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

    toHtml(){
        const productContainer = document.getElementById("product-list")
        
        if (!productContainer) return;

        const productHtml = document.createElement("li");
        productHtml.id = this._id;

        productHtml.innerHTML = `
        <div class="rounded-xl overflow-hidden flex flex-col border h-[370px] w-[250px] bg-white">
          <div class="mb-10 relative h-full">
            <div class=""><img class="h-[100%]" title = "Product Image" src="${this._productImg}" alt=""></div>
            <button id="button-add-to-cart" type="button" class="button rounded-lg font-semibold"> <div class="fa fa-cart-plus px-1"></div>
              Add to Cart</button>
          </div>

          <div class="flex flex-col m-[10px] ">
            <span class="product-category">${this._productCategory}</span>
            <span class="product-name">${this._productName}</span>
            <span class="product-price">$${this._productPrice}</span>
          </div>
        </div>
    `;

    const product = new Product(this._productName, this._productPrice, this._productCategory, this._productImg);
    const cart = new ShoppingCart();


    const addToCartBttn = document.querySelector("#button-add-to-cart");
    addToCartBttn?.addEventListener("click", () => cart.increaseProductCount(product))
       

    productContainer.appendChild(productHtml);

    }

   
}