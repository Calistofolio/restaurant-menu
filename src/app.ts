import { Product } from "./entities/product";
import data from "../data.json";
import { ShoppingCart } from "./entities/shoppingCart";

const products: Product[] = [];

const product1 = new Product("banana", 10, "Fruta", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmercadoorganico.com%2Fhortifruti-organico%2F4110-banana-prata-organica-600g-osm.html&psig=AOvVaw34YFitdIYH8cynPUzCdLmV&ust=1727200808860000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjNgt_S2YgDFQAAAAAdAAAAABAE")
const product2 = new Product("mamao", 15, "Fruta", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmercadoorganico.com%2Fhortifruti-organico%2F4110-banana-prata-organica-600g-osm.html&psig=AOvVaw34YFitdIYH8cynPUzCdLmV&ust=1727200808860000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjNgt_S2YgDFQAAAAAdAAAAABAE")

const cart = new ShoppingCart();
cart.addToCart(product1)
cart.addToCart(product2)
console.log(cart)


for (let i = 0; i < data.length; i++) {
    const product = new Product(data[i].name, data[i].price, data[i].category, data[i].image.thumbnail);
    product.toHtml()
    products.push(product);
}