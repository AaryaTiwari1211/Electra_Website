import React from 'react'
import './Products.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import { ProductsData } from '../../utils/products'

const Products = () => {
    const { head, content, product_desc, services_desc, products, services } = ProductsData

    return (
        <div className='products-section'>
            <div className="products-section-1">
                <p>{head}</p>
            </div>
            <h2 style={{ textAlign: 'center', padding: '20px', margin: '0' }}>Products</h2>
            <div className='products-section-2' style={{
                textAlign: 'center',
                padding: '0 10%',
                fontSize: '1.2rem',
                lineHeight: '1.5',
                fontWeight: '500',
                fontFamily: 'var(--body-font)'
            }}>
                <p>{product_desc}</p>
            </div>
            <div className='products-items'>
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard src={product.img} title={product.name} key={index} id={product.id} />
                        )
                    })
                }
            </div>
            <h2 style={{ textAlign: 'center', padding: '20px', margin: 0 }}>Services</h2>
            <div className='products-section-2' style={{
                textAlign: 'center',
                padding: '0 10%',
                fontSize: '1.2rem',
                lineHeight: '1.5',
                fontWeight: '500',
                fontFamily: 'var(--body-font)'
            }}>
                <p>{services_desc}</p>
            </div>
            <div className='products-items'>
                {
                    services.map((service, index) => {
                        return (
                            <ServicesCard src={service.img} title={service.name} key={index} id={service.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products