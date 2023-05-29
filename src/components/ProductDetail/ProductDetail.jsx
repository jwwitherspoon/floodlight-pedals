import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';

function ProductDetail() {
    const { productKey } = useParams();
    const product = products[productKey];

    return (
        <div className='product-detail'>
            <img
                src={process.env.PUBLIC_URL + product.images[0]}
                alt={product.caption}
                className='product-image'
            ></img>
            <div>
                <h1>{product.caption}</h1>
                <div className='content' dangerouslySetInnerHTML={{ __html: product.productText }}></div>
            </div>
        </div>
    );
}

export default ProductDetail;
