import Layout from "../../Components/Layout";
import useReadingListStore from "../../Stores/useReadingListStore";
import { MdOutlineDeleteOutline } from "react-icons/md";

function MyLibraries() {
  const { readingList, removeBook } = useReadingListStore();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Lista de lectura</h1>
      <ul className="space-y-4 mr-12 ml-12">
        {readingList.map((book) => (
          <li
            key={book.ISBN}
            className="relative p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => removeBook(book)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <MdOutlineDeleteOutline size={24} />
            </button>
            <div className="flex items-center">
              <img
                src={book.cover}
                alt={book.title}
                className="w-20 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.genre}</p>
                <p className="text-sm text-gray-600">{book.author?.name}</p>
                <p className="text-sm text-gray-600">{book.synopsis}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {readingList.length === 0 && <p>No hay libros en el momento.</p>}
    </Layout>
  );
}

export default MyLibraries;
