import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateProduct = ({ setUpdated, id }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
            .then(res => {
                console.log(res);
                setProductName(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [id]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`, { title: productName, price: price, description: description })
            .then(res => {
                console.log(res)
                setUpdated(Date())
            })
            .catch(err => console.log(err))
    }
    
    return (
        <form onSubmit={handleOnSubmit}
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
            <h1>Update Product</h1>
            <label htmlFor='product-name'>Product Name</label>
            <input type='text' id='product-name' name='product-name'
                onChange={(e) => setProductName(e.target.value)} value={productName} />
            <label htmlFor='price'>Price</label>
            <input type='number' id='price' name='price'
                onChange={(e) => setPrice(e.target.value)} value={price} />
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' name='description'
                onChange={(e) => setDescription(e.target.value)} value={description} />
            <input type='submit' />
        </form>
    )
}

export default UpdateProduct;



