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
    

    addToCart() {
        const product =  new Product(this._productName, this._productPrice, this._productCategory, this._productImg);
        product._id = this._id
        if (!product) return;
        const shoppingCart = new ShoppingCart(product, product._productPrice)

    }

    toHtml(){
        const product = document.createElement("div");
        product.className = "product";
        product.id = this._id;

        const productImg = `<div class="product-img">
      <img title= "Product Image" src="/assets/images/image-macaron-desktop.jpg" alt="">
      <div class="cart-button" onclick="addToCart()"><i class="fa fa-cart-plus"></i>  Add to cart</div>
    </div>`

    const productInformation = `div Class="product-information">
        <span class="product-category">Macaron</span>
        <span class="product-name">Macaron Mix of Five</span>
        <span class="product-price">8.00</span>
    </div>
    </div>`

    product.innerHTML += productImg;
    product.innerHTML += productInformation;

    document.body.appendChild(product);

    }

   
}