import { useLocation } from 'react-router-dom';

import { CatalogItem } from './CatalogItem';

export const Categories = () => {
  const { state } = useLocation();
  const products = state?.products || [];

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3">
            <CatalogItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
