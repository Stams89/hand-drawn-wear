import '../styles/add.css';

import { useState, useContext } from 'react';
import { AuthContext } from '../services/contexts/AuthContext';

export const AddProduct = ({ onAddProductSubmit }) => {
  const { currentUser } = useContext(AuthContext);
  
  const [values, setValue] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
    owner: currentUser ? currentUser.uid : null // set owner to uid of current user or null if no user is logged in
  });

  const onChangeHandler = (e) => {
    setValue(state => ({ ...state, [e.target.name]: e.target.value }))
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddProductSubmit(values);
  }
  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Add Product</h1>
          <label htmlFor="name">Name:</label>
          <input
            value={values.name}
            onChange={onChangeHandler}
            type="text"
            id="title"
            name="name"
            placeholder="Enter name..."
          />
          <label htmlFor="details">Description:</label>
          <input
            value={values.description}
            onChange={onChangeHandler}
            type="text"
            id="details"
            name="description"
            placeholder="Enter product details..."
          />
          <label htmlFor="price">Price:</label>
          <input value={values.price}
            onChange={onChangeHandler}
            type="number"
            id="price"
            name="price"
            min={1}
            placeholder={1}
          />
          <label htmlFor="type">Type:</label>
          <input value={values.type}
            onChange={onChangeHandler}
            type="text"
            id="type"
            name="type"
          />
          <label htmlFor="game-img">Image:</label>
          <input value={values.img}
            onChange={onChangeHandler}
            type="text"
            id="img"
            name="img"
            placeholder="Upload a photo..."
          />

          <input
            className="btn submit"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </section>

  )

}