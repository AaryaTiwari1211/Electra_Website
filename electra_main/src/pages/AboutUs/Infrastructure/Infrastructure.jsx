import React from 'react'
import { InfrastructureData } from '../../../utils/infrastructure'
import './Infrastructure.css'

const Infrastructure = () => {
    return (
        <div className='infrastructure-main'>
            <div className="section-1">
                <p>INFRASTRUCTURE</p>
            </div>
            <div className="section-2">
                <h2>{InfrastructureData.about.head}</h2>
                <p>{InfrastructureData.about.content}</p>
            </div>
            <div className="section-3">
                <p className='section-3-heading'>{InfrastructureData.items_sections.head}</p>
                <div className="section-3-items">
                    {InfrastructureData.items_sections.items.map((item, index) => {
                        const isOdd = index % 2 === 0; 
                        const flexStyle = isOdd ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' };

                        return (
                            <div className="section-3-item" key={index} style={flexStyle}>
                                <img className='section-3-item-image' src={item.img} alt="item" />
                                <div className='section-3-item-content'>
                                    <p className='section-3-item-brand'>{item.brand}</p>
                                    <p className='section-3-item-model'>{item.model}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Infrastructure