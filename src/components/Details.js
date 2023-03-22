import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/details.css";
import firebase from "../../src/components/firebase";


export const Details = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = firebase.firestore();
   db.collection("Products").doc(prodId)
  .get()
  .then((doc) => {
    if (doc.exists) {
      const result = doc.data();
      setProduct(result);
    } else {
      console.log("No such product!");
    }
  })
  .catch((error) => {
    console.log("Error getting product:", error);
  });

  }, [prodId]);
  

  return (
    <div className="container my-5">
      <div className="card details-card p-0">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              className="img-fluid details-img"
              src={"../../public/img/product-2.jpg"}
              
              alt={product.Name} 
            />
          </div>
          <div className="col-md-6 col-sm-12 description-container p-5">
            <div className="main-description">
              <p className="product-category mb-0"></p>
              <h3>{product.Name}</h3>
              <hr />
              <p className="product-price">${product.Price}</p>
              <form className="add-inputs" method="post">
                <input
                  type="number"
                  className="form-control"
                  id="cart_quantity"
                  name="cart_quantity"
                  defaultValue={1}
                  min={1}
                  max={10}
                />
                <button
                  name="add_to_cart"
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Add to cart
                </button>
              </form>
              <form className="add-inputs" method="post">
                <button
                  name="add_to_cart"
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Add to Wishlist
                </button>
              </form>
              <div style={{ clear: "both" }} />
              <hr />
              <p className="product-title mt-4 mb-1">About this product</p>
              <p className="product-description mb-4">{product.Description}</p>
              <hr />
              <p className="product-title mt-4 mb-1">Share this product</p>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
    </div>
  );
};
