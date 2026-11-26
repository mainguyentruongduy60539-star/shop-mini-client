import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <div className="card-meta">
          <span className="product-category">{product.category}</span>
          {isOutOfStock && <span className="out-of-stock">Hết hàng</span>}
        </div>
        <h3>{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button className="btn" disabled={isOutOfStock}>
          {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}