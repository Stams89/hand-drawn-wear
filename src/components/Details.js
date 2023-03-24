import '../styles/details.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import firebase from '../../src/components/firebase';

export function Details() {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [comment, setComment] = useState({
    username: "",
    comment: "",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const getProduct = async () => {
      try {
        const doc = await db.collection('Products').doc(prodId).get();
        if (doc.exists) {
          const productData = { id: doc.id, ...doc.data() };
          localStorage.setItem('product', JSON.stringify(productData));
          setProduct(productData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    };
    const storedProduct = JSON.parse(localStorage.getItem('product'));
    if (storedProduct && storedProduct.id === prodId) {
      setProduct(storedProduct);
    } else {
      getProduct();
    }
  }, [prodId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addCommentHandler = (e) => {
    e.preventDefault();
    console.log(comment.username, comment.comment);
  }

  const onChange = (e) => {
    setComment(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
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
                  Add Comment
                </button>
              </form>
              <div style={{ clear: "both" }} />
              <hr />
              <p className="product">About this product</p>
              <p className="product" mb->{product.description}</p>
              <hr />


            </div>
          </div>
        </div>
        {/* End row */}
      </div>

      <form>
        <div className="form-group" onSubmit={addCommentHandler}>
          <label htmlFor="comments" style={{ fontSize: "24px" }}>Comments</label>
          <input
            type=""
            name="username"
            placeholder=''
            onChange={onChange}
            value={comment.username}
          />
          <textarea
            className="form-control"
            id="comments"
            rows="6"
            name="comment"
            placeholder='Comment......'
            onChange={onChange}
            value={comment.comment}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
};
