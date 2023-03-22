
import '../styles/add.css';
import { useState } from 'react';
export const AddProduct = ({
  onAddProductSubmit,
}) => {
  const [values, setValue] = useState({
    Name: "",
    Description: "",
    Price: "",
    img: "",
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
            value={values.Name}
            onChange={onChangeHandler}
            type="text"
            id="title"
            name="Name"
            placeholder="Enter name..."
          />
          <label htmlFor="details">Details:</label>
          <input
            value={values.Details}
            onChange={onChangeHandler}
            type="text"
            id="details"
            name="Details"
            placeholder="Enter product details..."
          />
          <label htmlFor="price">Price:</label>
          <input value={values.Price}
            onChange={onChangeHandler}
            type="number"
            id="price"
            name="Price"
            min={1}
            placeholder={1}
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

