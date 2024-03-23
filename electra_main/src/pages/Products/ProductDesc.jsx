import React from 'react';
import { ProductsData } from '../../utils/products';
import { useParams } from 'react-router-dom';
import './ProductDesc.css';

const ProductDesc = () => {
    const { products, services } = ProductsData;
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));
    const service = services.find(service => service.id === parseInt(id));

    return (
        <>
            {
                product ? (
                    <div className="product-desc">
                        <div className="product-image">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <h1>{product.name}</h1>
                            <p>{product.desc}</p>
                        </div>
                    </div>
                ) : (
                    <div className="product-desc">
                        <div className="product-image">
                            <img src={service.img} alt={service.name} />
                        </div>
                        <div className="product-details">
                            <h1>{service.name}</h1>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ProductDesc;
