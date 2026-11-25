import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((p) => p.category))];

  return (
    <section className="container category-section">
      <div className="category-list">
        <span className="category-badge active">Tất cả</span>
        {categories.map((cat) => (
          <span key={cat} className="category-badge">
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
}