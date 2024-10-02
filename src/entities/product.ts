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
    
    
    

    toHtml(){
        const productContainer = document.getElementById("container")
        
        if (!productContainer) return;

        const productHtml = document.createElement("li");
        productHtml.id = this._id;

        productHtml.innerHTML = `<div class="product-container">
    <div><h1>Desserts</h1></div>
    <div class="product-img">
      <img title= "Product Image" src="/assets/images/image-macaron-desktop.jpg" alt="">
      <div class="cart-button" id = "add-to-cart" onclick="addToCart()"><i class="fa fa-cart-plus"></i>  Add to cart</div>
    </div> 

    <div Class="product-information">
      <span class="product-category">Macaron</span>
      <span class="product-name">Macaron Mix of Five</span>
      <span class="product-price">8.00</span>
    </div>
 </div>`;

    const addToCartBttn = document.querySelector("#add-to-cart");
    const cart = new ShoppingCart();

    addToCartBttn?.addEventListener("click", () => cart.increaseProductCount)

    productContainer.appendChild(productHtml);

    }

   
}