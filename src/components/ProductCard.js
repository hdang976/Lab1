export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img className="image" src={product.image} alt={product.name}></img>
            <div className="card-content">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Status: {product.status}</p>
            <button style={{ backgroundColor: product.stock === 0 ? 'grey' : 'blue', color: 'white' }}>
                {product.stock === 0 ? 'Out of stock' : 'Add to cart'}
            </button>
            </div>
        </div>
    );
}
