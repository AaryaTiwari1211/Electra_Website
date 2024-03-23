import { useNavigate } from "react-router-dom";

const ServicesCard = ({ src, title, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Clicked')
        navigate(`/products-services/${id}`); // Update the path according to your route configuration
    };
    return (
        <div className="section2-card" onClick={handleClick}>
            <img src={src} alt="Sample Photo" className="card-img-top" />
            <div className="section2-read-more-banner">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ServicesCard
