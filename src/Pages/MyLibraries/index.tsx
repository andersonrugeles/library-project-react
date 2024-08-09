import Layout from "../../Components/Layout";
import useReadingListStore from "../../Stores/useReadingListStore";

function MyLibraries() {
  const { readingList } = useReadingListStore();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Lista de lectura</h1>
      <ul className="space-y-4">
        {readingList.map((book) => (
          <li
            key={book.ISBN}
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-16 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.genre}</p>
              <p className="text-sm text-gray-600">{book.author?.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default MyLibraries;
