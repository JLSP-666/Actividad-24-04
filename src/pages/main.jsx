import { useEffect, useState } from 'react';
import './Main.css';
import SearchBar from '../UI/Buscar.jsx';

export default function main() {
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
    <div className="app">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>🛒 Mi Tienda React</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 - Hecho con ❤️ en React</p>
    </footer>
  );
}

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}