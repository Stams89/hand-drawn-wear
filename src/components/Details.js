import '../styles/details.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import firebase from '../../src/components/firebase';
import { AuthContext } from '../services/contexts/AuthContext';


export function Details() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser._delegate.uid : null;
  console.log(userId);
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [likes, setLikes] = useState(() => {
    const likesStr = localStorage.getItem(`likes-${prodId}`);
    return likesStr ? parseInt(likesStr) : 0;
  });
 
  // const [comment, setComment] = useState({
  //   username: "",
  //   comment: "",
  // });

  useEffect(() => {
    const db = firebase.firestore();

    const updateLikes = async () => {
      try {
        await db.collection('Products').doc(prodId).update({
          likes: likes,
        });
        localStorage.setItem(`likes-${prodId}`, likes.toString());
      } catch (error) {
        console.log('Error updating document:', error);
      }
    };

    updateLikes();
  }, [likes, prodId]);

  useEffect(() => {
    const db = firebase.firestore();

    const getLikes = async () => {
      const likesStr = localStorage.getItem(`likes-${prodId}`);
      if (likesStr) {
        setLikes(parseInt(likesStr));
      } else {
        try {
          const doc = await db.collection('Products').doc(prodId).get();

          if (doc.exists) {
            const likesData = doc.data().likes;
            setLikes(likesData);
            localStorage.setItem(`likes-${prodId}`, likesData.toString());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.log('Error getting document:', error);
        }
      }
    };

    getLikes();
  }, [prodId]);

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

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDeleteClick = async () => {
    const db = firebase.firestore();
    try {
      await db.collection('Products').doc(prodId).delete();
      alert('Product deleted successfully!');
    } catch (error) {
      console.log('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };


  // const addCommentHandler = async (e) => {
  //   e.preventDefault();
  //   const db = firebase.firestore();
  //   const newComment = {
  //     username: comment.username,
  //     comment: comment.comment,
  //     productId: prodId,
  //     createdAt: new Date(),
  //   };
  //   try {
  //     await db.collection('Comments').add(newComment);
  //     setComment({ username: '', comment: '' });
  //     alert('Comment added successfully!');
  //   } catch (error) {
  //     console.log('Error adding comment:', error);
  //     alert('Error adding comment. Please try again.');
  //   }
  // }

  // const onChange = (e) => {
  //   setComment(state => ({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   }))
  // }


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
                {product.owner === userId && (

                  <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
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

              <button onClick={handleLikeClick}>
                <i className="fa fa-thumbs-up"></i> Like ({likes})
              </button>


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
