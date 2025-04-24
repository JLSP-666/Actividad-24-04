export default function Cartas({ product }) {
  return (
    <div className="bg-gray-800 border-2 border-gray-600 p-4 rounded-xl h-80 shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all transform">
      <img
        src={product.image}
        alt={product.title}
        className="w-28 mx-auto mb-4 border-4 border-green-400 rounded-2xl"
      />
      <h3 className="text-lg font-semibold text-gray-200 mb-2">{product.title}</h3>
      <p className="text-green-400 font-bold">${product.price}</p>
    </div>
  );
}
