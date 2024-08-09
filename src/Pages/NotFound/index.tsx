import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl mt-2">¡Página no encontrada!</p>
        <p className="mt-4">Lo sentimos, la página que buscas no existe.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
