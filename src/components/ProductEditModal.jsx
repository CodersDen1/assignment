/* eslint-disable react/prop-types */
// ProductEditModal.jsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; 
import Button from './Button';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';

const ProductEditModal = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch()
  const [editedProduct, setEditedProduct] = useState(product);
   
  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value
    });
  };

  const handleSave = () => {
    // Check if the image field is empty (indicating no new image uploaded)
    if (!editedProduct.thumbnail) {
      // If no new image uploaded, retain the existing image data
      editedProduct.thumbnail = product.thumbnail;
    }
    dispatch(updateProduct({ id: editedProduct.id, updatedProduct: editedProduct }));
    console.log('Saving edited product:', editedProduct);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={editedProduct.title}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="text"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Image URL:
          <input
            type="text"
            name="image"
            value={editedProduct.thubnail}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        {/* Add more input fields for other product details */}
        <div className="flex justify-end mt-4">
          <Button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2">Save</Button>
          <Button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductEditModal;
