import React from 'react';

const Allproduct = ({product}) => {
    return (
        product.map((val )=>(
            <div key={val.id}>
                <h1>{val.name}</h1>
                <p>{val.price}</p>
            </div>
        ))
    );
}

export default Allproduct;
