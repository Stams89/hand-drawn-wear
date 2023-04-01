import { useNavigate } from 'react-router-dom';
import "./firebase";


export const Home = ({
  products
}) => {
console.log(products);
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    const filteredProducts = products.filter((product) => product.type === type);
    navigate('/categories', { state: { products: filteredProducts } });
    console.log(filteredProducts);
  
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
          </a>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: 410 }}
            >
              <div className="nav-item dropdown">
                <a
                  href=""
                  className="nav-link"
                  data-toggle="dropdown"
                  onClick={() => handleCategoryClick('men')}
                >
                  Men
                </a>
                <a
                  href=""
                  className="nav-link"
                  data-toggle="dropdown"
                  onClick={() => handleCategoryClick('women')}
                >
                  Women
                </a>
                <a
                  href=""
                  className="nav-link"
                  data-toggle="dropdown"
                  onClick={() => handleCategoryClick('kids')}
                >
                  Kids
                </a>
              </div>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('jackets')}>
                Jackets
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('shoes')}>
                Shoes
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('steps')}>
                Cloth for baby's first steps
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('decoupage')}>
              Decoupage
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('ceramic')}>
                Ceramic
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('family')}>
                Family clothes
              </a>
              <a href="" className="nav-item nav-link" onClick={() => handleCategoryClick('milestone')}>
              Milestone
          </a>
        </div>
      </nav>
    </div>
    <div className="col-lg-9">
      
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: 480, width:1100 }}>
            <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 800 }}>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 410 }}>
            <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          data-slide="prev"
        >
        </a>
      </div>
    </div>
  </div>
</div>

    )
}