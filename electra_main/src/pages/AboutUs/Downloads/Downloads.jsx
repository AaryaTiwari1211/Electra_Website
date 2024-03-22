import React from 'react'
import './Downloads.css'
import { downloadsData } from '../../../utils/downloads'


const Downloads = () => {

    return (
        <div className='downloads-main'>
            <div className='downloads-left'>
                <p class="downloads-content">
                    {downloadsData.content}
                </p>
                <button className='downloads-button'>Download</button>
            </div>
            <img class="downloadsimage" alt="" src={downloadsData.img} />
        </div>
    )
}

export default Downloads