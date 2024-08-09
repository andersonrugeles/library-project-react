import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import { ShoppingCartContextProps } from "../../Interfaces";

const BookDetail = () => {
  const context: ShoppingCartContextProps | undefined =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context?.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>{context?.bookToShow?.title}</h2>
        <div>
          <FaXmark
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context?.closeBookDetail()}
          ></FaXmark>
        </div>
      </div>
      <figure className="px-6 flex justify-center">
        <img
          className="max-w-full max-h-60 object-contain rounded-lg"
          src={context?.bookToShow?.cover}
          alt={context?.bookToShow?.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          {context?.bookToShow?.author?.name}
        </span>
        <span className="font-medium text-md">
          {context?.bookToShow?.genre}
        </span>
        <span className="font-light text-sm">
          {context?.bookToShow?.synopsis}
        </span>
      </p>
    </aside>
  );
};

export default BookDetail;
