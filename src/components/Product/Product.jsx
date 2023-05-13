import './Product.css';

function Product({src, caption}) {
    return (
        <div className="product">
            <img src={src} alt={caption}/>
            <p>{caption}</p>
        </div>
    );
}

export default Product;
