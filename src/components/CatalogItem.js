import { Link } from "react-router-dom";

export const CatalogItem = ({
    id,
    Name,
    img,
  }) => {
    return (
      <div className="card product-item border-0" style={{ height: "400px", width: "250px", marginBottom: "50px",  marginRight: "2%",}}>
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={img} style={{ height: "250px", width: "80%" }} />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3" style={{ fontFamily: "sans-serif" }}>{Name}</h6>
          <div className="d-flex justify-content-center">
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <Link to={`/catalog/${id}`} className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1" />
            View Detail
          </Link>
          <a href="" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1" />
            Add To Cart
          </a>
        </div>
      </div>
    );
  };
