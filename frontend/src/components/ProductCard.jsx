import React from "react";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 2,
      name: "Iphone XR",
      price: 500,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 3,
      name: "Airpods",
      price: 1000,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 4,
      name: "Airpods",
      price: 100,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 5,
      name: "Airpods",
      price: 835,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 6,
      name: "Airpods",
      price: 835,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 7,
      name: "Airpods",
      price: 835,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",
    },
    {
      id: 8,
      name: "Airpods",
      price: 835,
      alt: "product",
      image: "/product.JPG",
      description: "High quality airpods with noise cancellation",

    },
    // {
    //   id: 9,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
    // {
    //   id: 10,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
    // {
    //   id: 11,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
    // {
    //   id: 12,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
    // {
    //   id: 13,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
    // {
    //   id: 14,
    //   name: "Airpods",
    //   price: 835,
    //   alt: "product",
    //   image: "/product.JPG",
    //   description: "High quality airpods with noise cancellation",
    // },
  ];

  return (
    <div className="flex grow bg-linear-to-r bg-amber-500 to-blue-800">
      <div className="grid w-screen ml-4 mt-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl text-center p-4 border-2 bg-blend-overlay"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="h-72 w-full rounded-2xl"
            />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xl">{product.description}</p>
            <h3 className="text-xl">{product.price}$</h3>
            <button className="bg-green-400 hover:bg-green-500 w-50 p-2 rounded-2xl text-white mt-4">
              More Details
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 w-50 p-2 rounded-2xl text-white mt-4">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
