import { CatalogItem } from "./CatalogItem";
import { useState } from "react";

export const Catalog = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-6 col-6 text-left">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row px-xl-5 pb-3" style={{ marginBottom: "150px" }}>
        {filteredProducts.length === 0 && (
          <h3 className="no-articles">No products found</h3>
        )}
        {filteredProducts.map((x) => (
          <CatalogItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};