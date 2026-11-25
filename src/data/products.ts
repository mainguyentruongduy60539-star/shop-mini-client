export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Mercurial Vapor 15 Academy TF",
    price: 1850000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Nike+Mercurial+TF",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 10,
  },
  {
    id: 2,
    name: "Adidas Predator Accuracy.3 TF",
    price: 1690000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Adidas+Predator+TF",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 6,
  },
  {
    id: 3,
    name: "Mizuno Morelia Neo IV Pro AS",
    price: 2450000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Mizuno+Morelia+Neo",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 0,
  },
  {
    id: 4,
    name: "Puma Future Ultimate FG/AG",
    price: 3200000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Puma+Future+FG",
    category: "Đinh FG (Cỏ tự nhiên)",
    stock: 4,
  },
  {
    id: 5,
    name: "Kamito TA11 TF (Tuấn Anh)",
    price: 590000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Kamito+TA11",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 18,
  },
  {
    id: 6,
    name: "Joma Top Flex Rebound IC",
    price: 1450000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Joma+Top+Flex+IC",
    category: "Đinh IC (Futsal)",
    stock: 9,
  },
  {
    id: 7,
    name: "Nike Phantom GX Elite FG",
    price: 3650000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Nike+Phantom+FG",
    category: "Đinh FG (Cỏ tự nhiên)",
    stock: 5,
  },
  {
    id: 8,
    name: "Desporte Campinas JP6 IC",
    price: 2150000,
    image: "https://placehold.co/400x300/14532d/ffffff?text=Desporte+Campinas+IC",
    category: "Đinh IC (Futsal)",
    stock: 7,
  },
];