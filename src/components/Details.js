import { Product } from "./Product";

export const Details = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          < Product src="img/product-1.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-2.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-3.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-4.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-5.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-6.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-7.jpg" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        < Product src="img/product-8.jpg" />
        </div>
      </div>
    </div>
  )
}