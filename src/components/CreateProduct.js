import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ({setUpdated}) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, { title: productName, price: price, description: description })
            .then(res => {
                console.log(res)
                setUpdated(Date())
            })
            .catch(err => console.log(err))
    }



    return (
        <form onSubmit={handleOnSubmit} 
            style={{display:'flex', flexDirection: 'column',maxWidth:'300px', margin:'0 auto'}}>
            <h1>Add Product</h1>
            <label htmlFor='product-name'>Product Name</label>
            <input type='text' id='product-name' name='product-name'
                onChange={(e) => setProductName(e.target.value)} />
            <label htmlFor='price'>Price</label>
            <input type='number' id='price' name='price'
                onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' name='description'
                onChange={(e) => setDescription(e.target.value)} />
            <input type='submit' />
        </form>
    )
}
export default CreateProduct;