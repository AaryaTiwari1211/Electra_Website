import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ src, title, id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Clicked')
        navigate(`/products-services/${id}`); // Update the path according to your route configuration
    };
    return (
        <div className="card" onClick={handleClick}>
            <img src={src} alt="Sample Photo" className="card-img-top" />
            <div className="read-more-section">
                <button className="read-more-btn">{title}</button>
                <span className="arrow">&#8594;</span>
            </div>
        </div>
    )
}

export default ProductCard