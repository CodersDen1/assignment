import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    loading:false,
    error: null
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        fetchProductsSuccess: (state,action)=>{
            state.loading=false,
            state.products = action.payload.products
        },
        addProducts : (state,action)=>{
            state.products.push(action.payload);
         },
         updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.products.findIndex(product => product.id === id);
            if (index !== -1) {
              state.products[index] = updatedProduct;
            }
          },
          deleteProduct: (state, action)=> {
            const productId = action.payload;
            state.products = state.products.filter(product => product.id !== productId);
          }
        }
      });

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProducts,
  updateProduct,
  deleteProduct
} = productSlice.actions;

export default productSlice.reducer;
