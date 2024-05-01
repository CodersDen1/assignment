// ProductContainer.jsx
import React, { useState } from 'react';
import Button from './Button';
import ProductEditModal from './ProductEditModal';
import ProductDeleteModal from './ProductDeleteModal';

const ProductContainer = ({ productId, image, title, price, description }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: productId,
    title: title,
    price: price,
    description: description,
    image: image
  });

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
      <div className="p-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-gray-600">${price}</p>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex space-x-1 mt-4">
          <Button onClick={handleEditClick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Edit</Button>
          <Button onClick={handleDeleteClick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Delete</Button>
        </div>
      </div>
      <ProductEditModal isOpen={isEditModalOpen} onClose={handleEditModalClose} product={editedProduct} />
      <ProductDeleteModal isOpen={isDeleteModalOpen} onClose={handleDeleteModalClose} product={{ id: productId }} productId={productId} />
    </div>
  );
};

export default ProductContainer;
