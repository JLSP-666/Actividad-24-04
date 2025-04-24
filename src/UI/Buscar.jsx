import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="Barra-de-busqueda">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}
