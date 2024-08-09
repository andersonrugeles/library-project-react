import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { getListLibrary } from "../../Services";
import { LibraryItem } from "../../Interfaces";
import BookDetail from "../../Components/BookDetail";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [filterCriteria, setFilterCriteria] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<LibraryItem[]>([]);
  const [filterValue, setFilterValue] = useState<string>("");

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ['library'],
    queryFn: getListLibrary,
  });

  useEffect(() => {
    applyFilter();
  }, [filterCriteria, filterValue, items]);


  const applyFilter = () => {
    if (!filterCriteria || !filterValue) {
      setFilteredItems(items);
      return;
    }

    const validCriteria = ["title", "author", "genre"].includes(filterCriteria);

    if (validCriteria) {
      const filtered = items.filter((item) => {
        const book = item.book;

        switch (filterCriteria) {
          case "title":
            return book.title.toLowerCase().includes(filterValue.toLowerCase());
          case "author":
            return book.author?.name
              .toLowerCase()
              .includes(filterValue.toLowerCase());
          case "genre":
            return book.genre.toLowerCase().includes(filterValue.toLowerCase());
          default:
            return false;
        }
      });

      setFilteredItems(filtered);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <div className="flex gap-4 mt-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="rounded-lg border border-gray-300 p-2"
          />
          <select
            value={filterCriteria}
            onChange={(e) => setFilterCriteria(e.target.value)}
            className="rounded-lg border border-gray-300 p-2"
          >
            <option value="">Filtro</option>
            <option value="title">Titulo</option>
            <option value="author">Autor</option>
            <option value="genre">Genero</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg">
        {filteredItems?.map((item) => (
          <Card key={item.book.ISBN} data={item.book} />
        ))}
      </div>
      <BookDetail />
    </Layout>
  );
}

export default Home;
