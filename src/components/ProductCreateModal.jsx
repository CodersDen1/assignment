// ProductEditModal.jsx
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; 
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store/productSlice';

const ProductCreateModal = ({ isOpen, onClose}) => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState();
   
  useEffect(() => {
    setProduct(product);
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSave = () => {
    dispatch(addProducts( product ));
    console.log('Saving edited product:', product);
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
            value={null}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="text"
            name="price"
            value={null}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Image URL:
          <input
            type="text"
            name="image"
            value={null}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        <label className="block mb-2">
          Description :
          <input
            type="text"
            name="image"
            value={null}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md mt-1"
          />
        </label>
        
        <div className="flex justify-end mt-4">
          <Button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2">Save</Button>
          <Button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductCreateModal;
