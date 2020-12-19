import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = ({ updated, setUpdated }) => {
    const [products, setProducts] = useState([]);

    // useEffect to load products only on first render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then(response => setProducts(response.data.products))
    }, [updated])

    const deleteProduct = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
            .then(() => {
                console.log('deleted');
                setUpdated(Date())
            });
    }

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
            {products.map((product, i) => <div key={i}>
                <Link to={`/${product._id}/edit`}>{product.title}</Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
            )}
            <p>Updated at: {updated}</p>
        </div>
    )
}
export default ProductList;