import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const budgetShoes = filterProducts(products, { maxPrice: 2000000, sort: "asc" });
  const tfShoes = filterProducts(products, { category: "Đinh TF (Cỏ nhân tạo)" });
  const lowStockShoes = products.filter((p) => p.stock >= 1 && p.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList items={products} />
        <ProductList title="Giày đá banh nổi bật" items={products} />
        <ProductList title="Giày giá dưới 2.000.000 đ" items={budgetShoes} />
        <ProductList title="Giày sân cỏ nhân tạo (Đinh TF)" items={tfShoes} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStockShoes} />
      </main>
      <Footer />
    </>
  );
}

export default App;