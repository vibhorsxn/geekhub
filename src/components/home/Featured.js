import React from 'react'

const Featured = ({title,image}) => {

    return (
        <div>
            <h1>Feature products</h1>
            
            <img src={image} alt=" "/>
            <h5>{title}</h5>
            
        </div>
    )
}

export default Featured
