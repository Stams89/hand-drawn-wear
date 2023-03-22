import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import firebase from '../../src/components/firebase';

export function Details() {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("Products")
      .doc(prodId)
      .get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      });
  }, [prodId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="card details-card p-0">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              className="img-fluid details-img"
              src={product.img}
              alt={product.name}
            />
          </div>
          <div className="col-md-6 col-sm-12 description-container p-5">
            <div className="main-description">
              <p className="product-category mb-0"></p>
              <h3>{product.name}</h3>
              <hr />
              <p className="product-price">${product.price}</p>
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
              <p className="product-description mb-4">{product.description}</p>
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
