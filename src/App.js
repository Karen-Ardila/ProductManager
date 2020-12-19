import React, { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import { Router } from "@reach/router";
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [updated, setUpdated] = useState(Date());
  return (
    <div>
      <h1>Welcome to product manager</h1>
      <Router>
        <UpdateProduct path="/:id/edit" setUpdated={setUpdated} />
        <CreateProduct path='/' setUpdated={setUpdated} />
      </Router>
      <ProductList updated={updated} setUpdated={setUpdated} />
    </div>
  );
}

export default App;
