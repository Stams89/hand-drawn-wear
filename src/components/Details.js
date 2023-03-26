import '../styles/details.css';

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../src/components/firebase';
import { AuthContext } from '../services/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Details() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser._delegate.uid : null;
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [catalog, setCatalog] = useState(
    JSON.parse(localStorage.getItem('catalog')) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const db = firebase.firestore();

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

    getProduct();
  }, [prodId]);

  useEffect(() => {
    const getCatalog = async () => {
      const db = firebase.firestore();

      try {
        const snapshot = await db.collection('Products').get();

        const catalogData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCatalog(catalogData);
        localStorage.setItem('catalog', JSON.stringify(catalogData));
      } catch (error) {
        console.log('Error getting catalog:', error);
      }
    };

    getCatalog();
  }, []);

  const handleDeleteClick = async () => {
    const db = firebase.firestore();
    try {
      await db.collection('Products').doc(prodId).delete();
      alert('Product deleted successfully!');
  
      // Get the updated catalog from Firebase after deleting the product
      const snapshot = await db.collection('Products').get();
      const catalogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCatalog(catalogData);
  
      // Update the local storage version of the catalog
      localStorage.setItem('catalog', JSON.stringify(catalogData));
  
      navigate('/catalog', { replace: true });
    } catch (error) {
      console.log('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };
  
   
  return (
    <div className="container my-5">
      <div className="card details-card p-0">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              className="img-fluid details-img"
              src={product.img}
              alt={product.name}
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-md-6 col-sm-12 description-container p-5">
            <div className="main-description">
              <p className="product-category mb-0"></p>
              <h3>{product.name}</h3>
              <hr />
              <p className="product-price">${product.price}</p>
              <form className="add-inputs" method="post">
                {/* <input
                  type="number"
                  className="form-control"
                  id="cart_quantity"
                  name="cart_quantity"
                  defaultValue={1}
                  min={1}
                  max={10}
                /> */}
                {product.owner === userId && (
                  <div className="buttons d-flex">
                    <Link to={`/catalog/${prodId}/edit`} className="btn btn-primary btn-lg flex-grow-1 mx-2" style={{ backgroundColor: "rgb(195, 119, 222);", borderColor: "#f0ad4e" }}>Edit</Link>
                    <button
                      name="delete_product"
                      type="button"
                      className="btn btn-primary btn-lg flex-grow-1 mx-2"
                      onClick={handleDeleteClick}
                      style={{ backgroundColor: "#rgb(195, 119, 222)", borderColor: "#d9534f" }}
                    >
                      Delete
                    </button>
                  </div>

                )}
              </form>
              <form className="add-inputs" method="post">
              </form>
              <div style={{ clear: "both" }} />
              <hr />
              <p className="product">About this product</p>
              <p className="product-description" mb="0">{product.description}</p>
              <hr />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* <form>
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
      </form> */}
    </div>
  );
};