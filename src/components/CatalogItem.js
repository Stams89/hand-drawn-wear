import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CatalogItem = ({
  id,
  name,
  img,
  price,
  type,
}) => {
  const [numLikes, setNumLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes_${id}`);
    if (storedLikes) {
      setNumLikes(parseInt(storedLikes));
    }
    const likedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setLiked(likedProducts.includes(id));
  }, [id]);

  const handleLikeClick = () => {
    const likedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    if (!likedProducts.includes(id)) {
      const newLikes = numLikes + 1;
      setNumLikes(newLikes);
      localStorage.setItem(`likes_${id}`, newLikes.toString());
      localStorage.setItem("likedProducts", JSON.stringify([...likedProducts, id]));
      setLiked(true);
    }
  };

  return (
    <div className="card product-item border-0" style={{ height: "400px", width: "250px", marginBottom: "50px",  marginRight: "2%",}}>
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={img} style={{ height: "250px", width: "80%" }} />
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3" style={{ fontFamily: "sans-serif" }}>{name}</h6>
        <div className="d-flex justify-content-center">
          <p className="product-price">${price}</p>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light border">
        <Link to={`/catalog/${id}`} className="btn btn-sm text-dark p-0">
          <i className="fas fa-eye text-primary mr-1" />
          View Detail
        </Link>
        <div>
          <button className={`btn btn-link ${liked ? "text-danger" : ""}`} onClick={handleLikeClick}>
            <i className={`fas fa-heart mr-1 ${liked ? "text-danger" : ""}`} />
            {numLikes}
          </button>
        </div>
      </div>
    </div>
  );
};
