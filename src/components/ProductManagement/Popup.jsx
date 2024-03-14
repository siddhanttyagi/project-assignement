// Popup.js
import React from "react";
import "./Popup.css";
import { useState } from "react";
import productSlice from "../../slices/productSlice";
import {useDispatch} from 'react-redux'
import { editProduct } from "../../slices/productSlice";
const Popup = ({ onClose, popupObject }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription ] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const new_name = (name === "") ? popupObject.title : name;
    const new_price = (price === "") ? popupObject.price : price;
    const new_description = (description === "") ? popupObject.description : description;
    setName("");
    setPrice("");
    setDescription("");
    const new_product_data={
      "id": popupObject.id,
      "title": new_name,
      "description": new_description,
      "price": new_price,
      "discountPercentage": popupObject.discountPercentage,
      "rating": popupObject.rating,
      "stock": popupObject.stock,
      "brand": popupObject.brand,
      "category": popupObject.category,
      "thumbnail": popupObject.thumbnail,
      "images": popupObject.images

    }
    console.log(new_product_data)
    dispatch(editProduct(new_product_data))
    onClose();

  
    
  }

  return (
    <div className="popup-container">
      <div className="popup relative">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              EDIT NAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="text"
              placeholder={popupObject.title}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              EDIT PRICE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="number"
              placeholder={popupObject.price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              EDIT DESCRIPTION
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="text"
              placeholder={popupObject.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>


          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <button
          className="text-red-600 absolute right-1 top-0 text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
