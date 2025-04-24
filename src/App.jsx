import { useEffect, useState } from 'react';
import Buscar from './UI/Buscar.jsx';
import Cartas from './UI/Carta.jsx';

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 p-4 max-w-6xl mx-auto">
        <Buscar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filtered.map(product => (
            <Cartas key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 text-center shadow">
      <h1 className="text-2xl font-bold"> Tienda el Balatro </h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-2 text-center mt-8">
      <p>Tienda JÆH|╣R 2024</p>
    </footer>
  );
}