import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({updated}) => {
    const [products, setProducts] = useState([]);
    
    // useEffect to load products only on first render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then(response => setProducts(response.data.products))
    }, [updated])

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
            {products.map((product, i) => <p key={i}>{product.title}</p>)}

            <p>Updated at: {updated}</p>
        </div>
    )
}
export default ProductList;