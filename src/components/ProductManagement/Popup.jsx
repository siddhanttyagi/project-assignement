// Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ onClose, popupObject }) => {
  return (
    <div className="popup-container">
      <div className="popup relative">
        <h2 className='text-black'>Popup Content</h2>
        <h2 className='text-black'>{popupObject.title}</h2>
        <p className='text-black'>This is the content of the popup.</p>
        <button className='text-red-600 absolute right-1 top-0 text-2xl font-bold' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Popup;