import { Product } from "./entities/product";
import data from "../data.json";

const products: Product[] = [];

for (let i = 0; i < data.length; i++) {
    const product = new Product(data.[i].name, data.[i].price, data.[i].category, data.[i].image);
    products.push(product);

    product.toHtml()
}