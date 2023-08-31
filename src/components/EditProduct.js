import '../styles/edit.css';

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import firebase from '../../src/components/firebase';

export const EditProduct = () => {
  
  const { prodId } = useParams();
  const db = firebase.firestore();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    price: '',
    description: '',
    img: '',
  });

  useEffect(() => {
    const prodRef = db.collection('Products').doc(prodId);
    prodRef.get().then((doc) => {
      if (doc.exists) {
        const productData = doc.data();
        setValues(prevValues => ({ ...prevValues, ...productData }));
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }, [prodId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with values:', values);
    const prodRef = db.collection('Products').doc(prodId);
    console.log(prodRef);
    prodRef.update(values).then(() => {
      console.log('Product updated successfully');
      navigate(`/catalog/${prodId}`);
    }).catch((error) => {
      console.error('Error updating product:', error);
    });
  };

  return (
    <section id="edit-page" className="auth" style={{ marginTop: "40px" }}>
      <form id="edit" onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "50px" }}>
          <h1>Edit Product</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <label htmlFor="price">Price:</label>
            <input
              value={values.price}
              onChange={handleInputChange}
              type="number"
              id="price"
              name="price"
              min={0.01}
              step={0.01}
              placeholder={0}
              style={{ width: '230px' }}

            />
            <label htmlFor="type">Type:</label>
            <select
              value={values.type}
              onChange={handleInputChange}
              id="type"
              name="type"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="jackets">Jackets</option>
              <option value="shoes">Shoes</option>
              <option value="steps">Steps</option>
              <option value="decoupage">Decoupage</option>
              <option value="ceramic">Ceramic</option>
              <option value="family">Family</option>
              <option value="milestone">Milestone</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="img">Image:</label>
            <input
              type="text"
              id="img"
              name="img"
              value={values.img}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <h1></h1>
        <button type="submit" style={{ width: "80px" }}>Save</button>
      </form>
    </section>

  );
};
