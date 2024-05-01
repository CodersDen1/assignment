import React, { useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../store/productSlice'; 
import productService from '../services/ProductService'; 
import ProductContainer from '../components/ProductContainer'; 
import Button from '../components/Button';
import ProductCreateModal from '../components/ProductCreateModal';


const ProductsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);


  const handleOpenClick = () => {
    setIsAddModalOpen(true);
  };



  const handleOpenModalClose = () => {
    setIsAddModalOpen(false);
  };



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.fetchAllProduct();
        console.log(data)
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.log(error)
        throw new Error(error.message)
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container mx-auto h-screen overflow-auto pl-4">
      <div className='flex justify-between p-6'>

      <h2 className="text-3xl font-semibold my-8">Products</h2>
      <Button 
      onClick = {handleOpenClick}
      className='p-2 h-16'>Add A Product</Button>
      </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-auto h-60">
          {products.map((product) => (
            <ProductContainer
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              description={product.description}
              productId={product.id}
            />
          ))}
        </div>
        <ProductCreateModal isOpen={isAddModalOpen} onClose={handleOpenModalClose}  />
    </div>
  );
};

export default ProductsPage;