export const Home = () => {
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
            <a href="#" className="nav-link" data-toggle="dropdown">
              T-Shurts 
            </a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href="" className="dropdown-item">
                Men's Dresses
              </a>
              <a href="" className="dropdown-item">
                Women's Dresses
              </a>
              <a href="" className="dropdown-item">
                Baby's Dresses
              </a>
            </div>
          </div>
          <a href="" className="nav-item nav-link">
            Jackets
          </a>
          <a href="" className="nav-item nav-link">
            Shoes
          </a>
          <a href="" className="nav-item nav-link">
            cloth for baby's first steps
          </a>
          <a href="" className="nav-item nav-link">
            Bread cover
          </a>
          <a href="" className="nav-item nav-link">
            Mugs
          </a>
          <a href="" className="nav-item nav-link">
            Puzzles
          </a>
          <a href="" className="nav-item nav-link">
            Family clothes
          </a>
          <a href="" className="nav-item nav-link">
            Bodysuit for kids
          </a>
        </div>
      </nav>
    </div>
    <div className="col-lg-9">
      
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: 410 }}>
            <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
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