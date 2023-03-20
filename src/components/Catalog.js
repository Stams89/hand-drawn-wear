import { Details } from "./Details";

export const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "Captain Jack Sparrow",
      description: "Hand painted t-shirt with a picture of your choice",
      price: 29.99,
      image: "img/product-1.jpg"
    },
    {
      id: 2,
      name: "Agnes Jacket",
      description: "Hand pained jacket with picture for your choice",
      price: 15.99,
      image: "img/product-2.jpg"
    },
    {
      id: 3,
      name: "Milestone Blanket",
      description: "Hand painted canvas to mark your child's growth.",
      price: 24.99,
      image: "img/cat-5.jpg"
    },
    {
      id: 4,
      name: "Baby body",
      description: "Hand pained baby body",
      price: 15.99,
      image: "img/cat-3.jpg"
    },
    {
      id: 5,
      name: "Easter eggs",
      description: "Ceramic hand painted eggs",
      price:4.99,
      image: "img/product-5.jpg"
    },
    {
      id: 6,
      name: "Family set",
      description: "Hand painted Sonic the Hedgehog t-shirts",
      price: 29.99,
      image: "img/product-6.jpg"
    },
    {
      id: 7,
      name: "Canvas for baby's first steps",
      description: "Hand painted canvas with pictures and text made to your choice",
      price: 19.99,
      image: "img/cat-4.jpg"
    },
    {
      id: 8,
      name: "Key Box",
      description: "Decoupage on wood",
      price: 15.99,
      image: "img/product-8.jpg"
    },
  ];

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">All Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <Details product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};