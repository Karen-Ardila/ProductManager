import React, { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';

function App() {
  const [updated, setUpdated] = useState(Date());
  return (
    <div>
      <h1>Welcome to product manager</h1>
      <CreateProduct setUpdated={setUpdated} />
      <ProductList updated={updated} />
    </div>
  );
}

export default App;
