import { useEffect, useState } from 'react';
import Buscar from './UI/Buscar.jsx';
import Carta from './UI/Carta.jsx';
import Header from './layout/header.jsx'; 
import Footer from './layout/Footer.jsx';

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
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">
      <Header />

      <main className="w-full max-w-6xl mx-auto p-6 flex-grow">
        <Buscar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filtered.map(product => (
            <Carta key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}