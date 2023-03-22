import { Details } from "./Details";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import "./firebase";
import { CatalogItem } from "./CatalogItem";

export const Catalog = ({
  products
 
}) => {

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">All Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3" style={{ marginBottom: "150px" }}>
        {products.map(x => <CatalogItem key={x._id} {...x} />)}
        {products.length === 0 && (
          <h3 className="no-articles">No products yet</h3>
        )}
      </div>
    </div>
  );
};
