export const TopBar = () => {
  return (
      <div className="container-fluid">
      <div className="row bg-secondary py-2 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center">
            <a className="text-dark" href="">
              FAQs
            </a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="">
              Help
            </a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="">
              Support
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-dark px-2" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-dark px-2" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="text-dark px-2" href="">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-dark px-2" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="text-dark pl-2" href="">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center py-3 px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a href="" className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"  style={{ fontFamily: "Skript" }}>
          
              Stamsy Art
            </h1>
          </a>
        </div>
        <div className="col-lg-6 col-6 text-left">
        </div>
        <div className="col-lg-3 col-6 text-right">
          <a href="" className="btn border">
            <i className="fas fa-heart text-primary" />
            <span className="badge">0</span>
          </a>
          <a href="" className="btn border">
            <i className="fas fa-shopping-cart text-primary" />
            <span className="badge">0</span>
          </a>
        </div>
      </div>
    </div>
    
    
  )
}