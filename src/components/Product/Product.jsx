import './Product.css';

function Product({product}) {
    return (
        <div className="product">
            <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.caption}/>
            <p>{product.caption}</p>
        </div>
    );
}

export default Product;
