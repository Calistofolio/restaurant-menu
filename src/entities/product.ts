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
        <div class="rounded-xl overflow-hidden flex flex-col border h-[270px] w-[250px]">
          <div class="mb-10 relative h-full bg-red-500">
            <div class="">${this._productImg}</div>
            <button id="button-add-to-cart" type="button" class="button rounded-lg text-white font-medium text-xs bg-red-400">Add to
              Cart</button>
          </div>

          <div class="flex flex-col">
            <span class="product-category">${this._productCategory}</span>
            <span class="product-name text-xl font-medium">${this._productName}</span>
            <span class="product-price">$${this._productPrice}</span>
          </div>
        </div>
    `;

    const addToCartBttn = document.querySelector("#add-to-cart");
    const cart = new ShoppingCart();

    addToCartBttn?.addEventListener("click", () => cart.increaseProductCount)

    productContainer.appendChild(productHtml);

    }

   
}