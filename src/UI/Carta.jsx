export default function Cartas({ product }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-auto mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>
    );
  }