import { v4 as uuidv4 } from 'uuid';
import { ShoppingCart } from './shoppingCart';
export class Product{
    private _id: string = uuidv4();
    private _productName: string;
    private _productPrice: number;
    private _productCategory: string;
    private _productImg: string;

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
    

    toHtml(){
        const container = document.createElement("div");
        container.className = "productContainer";
        container.id = this._id;

        const productImg = `<div class="product-img">
      <img title= "Product Image" src=${this._productImg} alt="">
      <div class="cart-button" onclick="addToCart()"><i class="fa fa-cart-plus"></i>  Add to cart</div>
    </div>`

    const productInformation = `<div class="product-information">
        <span class="product-category">${this._productCategory}</span>
        <span class="product-name">${this._productName}</span>
        <span class="product-price">${this._productPrice}</span>
    </div>
    </div>`

    product.innerHTML = productImg;
    product.innerHTML += productInformation;

    document.body.appendChild(product);

    }

   
}