import React, { useContext } from "react";
import { Book, ShoppingCartContextProps } from "../../Interfaces";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import useReadingListStore from "../../Stores/useReadingListStore";
import { ShoppingCartContext } from "../../Context";

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

  const renderIcon = (id: string) => {
    const isInCart = readingList.filter((book) => book.ISBN === id).length > 0;

    if (isInCart) {
      return (
        <div className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-200">
          <FaCheck
            className="text-gray-600 hover:text-gray-800"
            size={20}
          ></FaCheck>
        </div>
      );
    } else {
      return (
        <div
          className="bg-white p-2 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-200"
          onClick={() => addBook(data)}
        >
          <CiBookmarkPlus
            className="text-gray-600 hover:text-gray-800"
            size={20}
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer rounded-lg border border-gray-200 shadow-md relative overflow-hidden w-full max-w-[280px]">
      <img
        className="w-full h-auto object-cover"
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
