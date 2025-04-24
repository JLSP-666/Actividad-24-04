import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="border-2 border-gray-600 rounded-3xl w-64 mx-auto p-2 mt-4">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={input}
        onChange={handleChange}
        className="bg-gray-900 text-gray-200 w-full p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 placeholder-gray-500"
      />
    </div>
  );
}
