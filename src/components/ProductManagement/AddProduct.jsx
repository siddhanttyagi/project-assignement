// Popup.js
import React from "react";
import "./Popup.css";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { addProduct } from "../../slices/productSlice";
const AddProduct = ({ onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const new_product_data = {
      id: nanoid(),
      title: name,
      description: description,
      price: price,
      discountPercentage: discountPercentage,
      thumbnail: thumbnail,
    };
    setName("");
    setPrice("");
    setDescription("");
    setDiscountPercentage("");
    setThumbnail("");
    console.log(new_product_data);
    dispatch(addProduct(new_product_data));
    onClose();
  };

  const handleImageChange = (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (file) {
      setTimeout(() => {
        const src = URL.createObjectURL(file);
        setThumbnail(src);
        setIsLoading(false); // End loading once "processing" is done
      }, 1000); // Delay in milliseconds
    } else {
      setIsLoading(false); // In case no file is selected
    }
  };

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
              ADD NAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="text"
              placeholder="ADD Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              ADD PRICE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="number"
              placeholder="Add Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              ADD Discount Percentage
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="number"
              placeholder="Add Discount Percentage"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
            
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inputField"
            >
              ADD DESCRIPTION
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputField"
              type="text"
              placeholder="ADD Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="my-4"
                disabled={isLoading}
              />
              {isLoading && (
                <div className="text-center">
                  <p className="text-gray-500">Uploading...</p>
                  <div className="w-8 h-8 border-4 border-blue-500 border-dotted animate-spin rounded-full"></div>
                </div>
              )}
              <div className="text-black mt-0 mb-2 pt-0">{thumbnail}</div>
            </div>
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

export default AddProduct;
