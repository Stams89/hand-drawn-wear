
export const FilteredProducts = ({ products, searchQuery }) => {
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container">
      <h2 className="my-4">Search results for "{searchQuery}":</h2>
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={product.imageUrl} alt={product.name} />
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <h5 className="card-price">{product.price} USD</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}