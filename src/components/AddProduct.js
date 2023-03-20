import * as productService from '../services/productService';
import '../styles/add.css';

export const AddProduct = ({ addProductHandler }) => {
    const onSubmit = (e) => {
        e.preventDefault();

         const productData = Object.fromEntries(new FormData(e.target));

          //  productService.create(productData)
          //  .then(result => {
          //   console.log(result);
          //  })

       addProductHandler(productData)
    }

    return (
  

    <section id="create-page" className="auth">
    <form id="create" onSubmit={onSubmit}>
      <div className="container">
        <h1>Add Product</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter name..."
        />
        <label htmlFor="details">Details:</label>
        <input
          type="text"
          id="details"
          name="details"
          placeholder="Enter product details..."
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min={1}
          placeholder={1}
        />
        <label htmlFor="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
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

