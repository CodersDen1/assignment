// ProductDeleteModal.jsx
import React from 'react';
import Modal from 'react-modal';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/productSlice';

const ProductDeleteModal = ({ isOpen, onClose, productId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
    console.log('Deleting product...');
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
        <p className="mb-4">Are you sure you want to delete this product?</p>
        <div className="flex justify-end">
          <Button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2">Delete</Button>
          <Button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDeleteModal;
