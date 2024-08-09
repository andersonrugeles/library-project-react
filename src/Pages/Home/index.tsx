import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { getListLibrary } from "../../Services";
import { LibraryItem } from "../../Interfaces";
import BookDetail from "../../Components/BookDetail";

function Home() {
  const [items, setItems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    getLibrary();
  }, []);

  const getLibrary = async () => {
    const list: LibraryItem[] = await getListLibrary(
      "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/"
    );
    setItems(list);
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.book.ISBN} data={item.book} />
        ))}
      </div>
      <BookDetail />
    </Layout>
  );
}

export default Home;
