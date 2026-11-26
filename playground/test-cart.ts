// Chạy: node playground/test-cart.ts
import { products } from "../src/data/products.ts";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  countItems,
  calcTotal,
} from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import {
  filterProducts,
  getCategories,
  searchByPriceRange,
  groupByCategory,
} from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);      // Nike Mercurial x1
cart = addToCart(cart, products[0], 2);   // Nike Mercurial x3
cart = addToCart(cart, products[3]);      // Puma Future x1

console.log("Số sản phẩm:", countItems(cart));           // 4
console.log("Tổng tiền:", formatPrice(calcTotal(cart))); // 8.750.000 đ

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Đinh TF, giá tăng dần:",
  filterProducts(products, { category: "Đinh TF (Cỏ nhân tạo)", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'nike', tối đa 2 triệu:",
  filterProducts(products, { keyword: "nike", maxPrice: 2000000 }).map((p) => p.name)
);
console.log(
  "Giá từ 1.5tr đến 2.5tr:",
  searchByPriceRange(products, 1500000, 2500000).map((p) => p.name)
);
console.log("Số lượng theo danh mục:", groupByCategory(products));