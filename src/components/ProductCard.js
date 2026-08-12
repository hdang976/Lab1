export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img className="image" src={product.image} alt={product.name}></img>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Status: {product.status}</p>
            <button style={{backgroundColor: 'blue', color: 'white'}} className="btn-add">Add to cart</button>
        </div>
    );
}
