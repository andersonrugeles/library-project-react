import React, { useContext } from "react";
import { Book, ShoppingCartContextProps } from "../../Interfaces";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import useReadingListStore from "../../Stores/useReadingListStore";
import { ShoppingCartContext } from "../../Context";
import { Tooltip } from "react-tooltip";

interface CardProps {
  data: Book;
}
const Card: React.FC<CardProps> = ({ data }) => {
  const { addBook, readingList } = useReadingListStore();
  const context: ShoppingCartContextProps | undefined =
    useContext(ShoppingCartContext);

  const showBookDetail = (data: Book) => {
    context?.setBookToShow(data);
    context?.openBookDetail();
  };

  const addListReading = () =>{
    const itemsStorage: Book[] = JSON.parse(localStorage.getItem('readingList') || '[]');
    const updatedList = [...itemsStorage, data];
    localStorage.setItem('readingList', JSON.stringify(updatedList));
    addBook(data)
  }

  const renderIcon = (id: string) => {
    const isInCart = readingList.filter((book) => book.ISBN === id).length > 0;

    if (isInCart) {
      return (
        <div
          id={`tooltip-checked-${id}`}
          className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-200"
        >
          <FaCheck
            className="text-gray-600 hover:text-gray-800"
            size={20}
          ></FaCheck>
          <Tooltip
            anchorId={`tooltip-checked-${id}`}
            content="Agregado a la lista de lectura"
          />
        </div>
      );
    } else {
      return (
        <div
          id={`tooltip-checked-${id}`}
          className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-200"
          onClick={() => addListReading()}
        >
          <CiBookmarkPlus
            className="text-gray-600 hover:text-gray-800"
            size={20}
          />
          <Tooltip
            anchorId={`tooltip-checked-${id}`}
            content="Agregar a la lista de lectura"
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer rounded-lg border border-gray-200 shadow-md relative overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
      <img
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        src={data.cover}
        alt={data.title}
        onClick={() => showBookDetail(data)}
      />
      <span className="absolute bottom-2 left-2 bg-white/80 border border-gray-300 rounded-lg text-black text-xs m-2 px-3 py-1 shadow-md font-bold">
        {data.genre}
      </span>
      <div className="absolute top-2 right-2 flex items-center justify-center">
        {renderIcon(data.ISBN)}
      </div>
    </div>
  );
};
export default Card;
