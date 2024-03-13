import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../slices/productSlice";

function ProductManagement() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

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
                <div className="font-bold text-3xl mb-2">{product.title}</div>
                <p className="text-blue text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 absolute bottom-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  Price: ${product.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  Discount: {product.discountPercentage}%
                </span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-2 rounded text-1xl">
                  EDIT PRODUCT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductManagement;
