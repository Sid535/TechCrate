const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651413/au-odyssey-g7-c32g75t-lc32g75tqsexxy-530330431_sqsqmh.png",
    title: "Samsung Odyssey G7",
    description: "A high-performance gaming monitor with a curved screen.",
    category: "Monitor",
    brand: "samsumg",
    price: 699.99,
    salePrice: 649.99,
    totalStock: 15,
    averageReview: 4.5,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651490/71m9FJCubXL_trltjs.jpg",
    title: "NVIDIA GeForce RTX 4080",
    description: "A powerful graphics card for the ultimate gaming experience.",
    category: "Grafic_Card",
    brand: "nvidia",
    price: 1199.99,
    salePrice: 0,
    totalStock: 10,
    averageReview: 4.8,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651562/title_e32ydl.jpg",
    title: "Intel Core i9-13900K",
    description: "Top-of-the-line CPU for gaming and content creation.",
    category: "CPU",
    brand: "intel",
    price: 589.0,
    salePrice: 569.0,
    totalStock: 20,
    averageReview: 4.7,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651656/61wCOVcyvFL._UF894_1000_QL80__mioffy.jpg",
    title: "Corsair Vengeance LPX 32GB RAM",
    description: "High-speed DDR4 RAM for smooth multitasking.",
    category: "RAM",
    brand: "asus", // Assuming Corsair is not a brand option, using asus
    price: 129.99,
    salePrice: 0,
    totalStock: 30,
    averageReview: 4.6,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651695/90bbf4b45euJt7xFlVG6kjVrJTorlQIjswfWLDf6_rlw0hs.jpg",
    title: "Seagate BarraCuda 2TB Hard Drive",
    description: "Reliable and spacious storage for all your files.",
    category: "Storage",
    brand: "seagate",
    price: 54.99,
    salePrice: 49.99,
    totalStock: 50,
    averageReview: 4.4,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651734/title_n6rawm.jpg",
    title: "AMD Ryzen 9 7950X",
    description: "A powerful CPU for enthusiasts and creators.",
    category: "CPU",
    brand: "amd",
    price: 699.0,
    salePrice: 0,
    totalStock: 12,
    averageReview: 4.9,
  },
  {
    image: "https://res.cloudinary.com/dklecck7h/image/upload/v1759651771/71OrT3vn64S._UF894_1000_QL80__kr5xcy.jpg",
    title: "ASUS ROG Swift PG279QM",
    description: "A 27-inch gaming monitor with a 240Hz refresh rate.",
    category: "Monitor",
    brand: "asus",
    price: 749.0,
    salePrice: 729.0,
    totalStock: 8,
    averageReview: 4.7,
  },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();