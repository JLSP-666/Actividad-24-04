import { useEffect, useState } from 'react';
import Buscar from './UI/Buscar.jsx';
import Carta from './UI/Carta.jsx';
import Header from './layout/header.jsx'; 

export default function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query) => {
    const result = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="bg-gray-950">

      <Header />

      <main className="bg-yellow-200 w-1.500 mx-auto p-4 flex-grow">
        <Buscar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filtered.map(product => (
            <Carta key={product.id} product={product} />
          ))}
        </div>
      </main>

     
    </div>
  );
}