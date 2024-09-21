import { v4 as uuidv4 } from 'uuid';
export class Product{
    private _id: String = uuidv4();
    private _productName: String;
    private _productPrice: Number;
    private _productCategory: String;
    private _productImg: String;

    constructor(productName: String, productPrice: Number, productCategory: String, productImg: String){
        this._id;
        this._productName = productName;
        this._productPrice = productPrice;
        this._productCategory = productCategory;
        this._productImg = productImg;
    }
}