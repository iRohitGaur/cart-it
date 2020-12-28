import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  const products = [
    {
      category: "electronics",
      title:
        "BenQ 27-inch DesignVue Designer IPS Monitor, 4K UHD 2160p, 100% sRGB, HDR10, AQCOLOR Technology",
      price: "39,989.00",
      rating: 4.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61g28NtEd5L._SL1000_.jpg",
    },
    {
      category: "electronics",
      title:
        "Shure SM7B Cardioid Vocal Dynamic Microphone. Compact & elegant 6-zone paging microphone",
      price: "38,480.00",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/41BFaGNf7NL._SL450_.jpg",
    },
    {
      category: "electronics",
      title:
        "Redragon Kumara K552-RGB LED Backlit Mechanical Gaming Keyboard Without Numlock Keys",
      price: "3,990.00",
      rating: 4.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71sFaDtowqL._SL1500_.jpg",
    },
    {
      category: "books",
      title:
        "Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle",
      price: "390.00",
      rating: 4.5,
      image: "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg",
    },
    {
      category: "books",
      title:
        "The Intelligent Investor (English) Paperback – 2013 Paperback – 1 January 2003",
      price: "384.00",
      rating: 4.5,
      image: "https://images-na.ssl-images-amazon.com/images/I/91+t0Di07FL.jpg",
    },
    {
      category: "chair",
      title:
        "Gtracing Gaming Chair Racing Office Computer Ergonomic Video Game Chair Backrest and Seat Height Adjustable Swivel Recliner with Headrest and Lumbar Pillow Esports Chair (Red)",
      price: "20,000.00",
      rating: 4.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/619sWFsXJ%2BL._AC_SL1500_.jpg",
    },
  ];

  return (
    <>
      <div className="home">
        {products
          .filter((product) => product.category == "electronics")
          .map((item) => (
            <Product product={item} />
          ))}
      </div>
      <div className="home">
        {products
          .filter((product) => product.category == "books")
          .map((item) => (
            <Product product={item} />
          ))}
      </div>
      <div className="home">
        {products
          .filter((product) => product.category == "chair")
          .map((item) => (
            <Product product={item} />
          ))}
      </div>
    </>
  );
}

export default Home;
