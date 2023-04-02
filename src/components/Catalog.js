import { useState, useEffect } from "react";

import { CatalogItem } from "./CatalogItem";
import firebase from "../components/firebase";
import "./firebase";

export const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCatalog = catalog.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const db = firebase.firestore();

    const fetchCatalog = async () => {
      try {
        const snapshot = await db.collection("Products").get();
        const catalogData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCatalog(catalogData);
        localStorage.setItem("catalog", JSON.stringify(catalogData));
      } catch (error) {
        console.log("Error fetching catalog:", error);
      }
    };

    fetchCatalog();
  }, []);

  const handleDeleteClick = async (prodId) => {
    const db = firebase.firestore();
    try {
      await db.collection("Products").doc(prodId).delete();
      alert("Product deleted successfully!");

      // Get the updated catalog from Firebase after deleting the product
      const snapshot = await db.collection("Products").get();
      const catalogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCatalog(catalogData);

      // Update the local storage version of the catalog
      localStorage.setItem("catalog", JSON.stringify(catalogData));
    } catch (error) {
      console.log("Error deleting product:", error);
      alert("Error deleting product. Please try again.");
    }
  };

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
        {filteredCatalog.length === 0 && (
          <h3 className="no-articles">No products found</h3>
        )}
        {filteredCatalog.map((product) => (
          <CatalogItem
            key={product.id}
            {...product}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};
