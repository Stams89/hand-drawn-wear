import '../styles/details.css';

import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import firebase from '../../src/components/firebase';
import { AuthContext } from '../services/contexts/AuthContext';


export function Details() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser._delegate.uid : null;
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [catalog, setCatalog] = useState(
    JSON.parse(localStorage.getItem('catalog')) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const db = firebase.firestore();

      try {
        const doc = await db.collection('Products').doc(prodId).get();

        if (doc.exists) {
          const productData = { id: doc.id, ...doc.data() };
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

  const handleAddToCartClick = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size,
    };

    setCart([...cart, productToAdd]);
    localStorage.setItem('cart', JSON.stringify([...cart, productToAdd]));

    alert('Product added to cart successfully!');
  };
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleEditClick = () => {
    navigate(`/catalog/${prodId}/edit`, { state: product });
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
              <div className="details-row">
                <p className="product-price">${product.price}</p>
                {/* Conditionally render the select element */}
                {product.type === 'kids' || product.type === 'women' || product.type === 'men' || product.type === 'jackets' ? (
                  <select
                    className="form-select"
                    name="size"
                    id="size"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                  >
                    <option value="">Choose a size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                ) : null}
              </div>
              <div className="add-inputs">
                <div className="input-group mb-3">
                  {/* <button
                className="btn btn-outline-secondary quantity-button"
                type="button"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button> */}
                  <input
                    type="number"
                    className="form-control quantity-input"
                    placeholder="Quantity"
                    aria-label="Quantity"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(parseInt(event.target.value))
                    }
                  />
                  {/* <button
                className="btn btn-outline-secondary quantity-button"
                type="button"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button> */}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddToCartClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="product">About this product</p>
        <p className="product-description mb-0">
          {product.description}
        </p>
        <hr />
        <div className="buttons d-flex">
          {product.owner === userId && (
            <>
              <button
                type="button"
                className="btn btn-primary btn-lg flex-grow-1 mx-2"
                style={{
                  backgroundColor: "rgb(195, 119, 222);",
                  borderColor: "#f0ad4e",
                }}
                onClick={handleEditClick}
              >
                Edit
              </button>
              <button
                name="delete_product"
                type="button"
                className="btn btn-primary btn-lg flex-grow-1 mx-2"
                onClick={handleDeleteClick}
                style={{
                  backgroundColor: "#rgb(195, 119, 222)",
                  borderColor: "#d9534f",
                }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>


  );


};