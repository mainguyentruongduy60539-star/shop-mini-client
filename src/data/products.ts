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
    image: "/images/nike-zoom-mercurial-vapor-15-academy-tf.jpg",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 10,
  },
  {
    id: 2,
    name: "Adidas Predator Accuracy.3 TF",
    price: 1690000,
    image: "/images/Adidas Predator Accuracy.3 TF.jpg",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 6,
  },
  {
    id: 3,
    name: "Mizuno Morelia Neo IV Pro AS",
    price: 2450000,
    image: "/images/Mizuno Morelia Neo IV Pro AS.jpg",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 0,
  },
  {
    id: 4,
    name: "Puma Future Ultimate FG/AG",
    price: 3200000,
    image: "/images/Puma Future Ultimate AG.jpg",
    category: "Đinh FG (Cỏ tự nhiên)",
    stock: 4,
  },
  {
    id: 5,
    name: "Kamito TA11 TF (Tuấn Anh)",
    price: 590000,
    image: "/images/Kamito TA11 TF (Tuấn Anh).jpg",
    category: "Đinh TF (Cỏ nhân tạo)",
    stock: 18,
  },
  {
    id: 6,
    name: "Joma Top Flex Rebound IC",
    price: 1450000,
    image: "/images/Joma Top Flex Rebound IC.jpg",
    category: "Đinh IC (Futsal)",
    stock: 9,
  },
  {
    id: 7,
    name: "Nike Phantom GX Elite FG",
    price: 3650000,
    image: "/images/Nike Phantom GX Elite FG.jpg",
    category: "Đinh FG (Cỏ tự nhiên)",
    stock: 5,
  },
  {
    id: 8,
    name: "Desporte Campinas JP6 IC",
    price: 2150000,
    image: "/images/Desporte Campinas JP6 IC.jpg",
    category: "Đinh IC (Futsal)",
    stock: 7,
  },
];