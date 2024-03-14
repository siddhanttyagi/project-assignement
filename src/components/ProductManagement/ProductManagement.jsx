import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../slices/productSlice";
import { useState } from "react";
import Popup from "./Popup";
function ProductManagement() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupObject, setPopupObject] = useState({});
  const openPopup = (product) => {
    setIsPopupOpen(true);
    setPopupObject(product);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupObject({});
  };
  return (
    <>
      <div className="text-3xl underline my-3 text-indigo-400 font-serif">
        PRODUCT LIST
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate700 text-black">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-500 p-10 pb-20  relative md:pb-40"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg">
                <img
                  className="w-100 h-60 object-cover"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              <div className="px-6 py-4">
                <div className="flex justify-around">
                  <div className="font-bold text-3xl mb-2">{product.title}</div>
                  <div className="font-bold text-3xl mb-2">
                    {" "}
                    <button
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-blue text-base">{product.description}</p>
              </div>

              <div className="px-6 pt-4 pb-2 absolute bottom-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  Price: ${product.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  Discount: {product.discountPercentage}%
                </span>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-2 rounded text-1xl"
                  onClick={() => {
                    openPopup(product);
                  }}
                >
                  EDIT PRODUCT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} popupObject={popupObject} />}
    </>
  );
}

export default ProductManagement;
