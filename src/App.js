import React, { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';

function App() {
  const [updated, setUpdated] = useState(Date());
  return (
    <div>
      <CreateProduct setUpdated={setUpdated} />
      <ProductList updated={updated} />
    </div>
  );
}

export default App;
