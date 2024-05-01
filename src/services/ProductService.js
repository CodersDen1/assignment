import axios from "axios";



export class ProductService {

    /**fetching the products*/ 
    async fetchAllProduct() {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data; 
        } catch (error) {
            throw new Error('Error fetching the products');
        }
    }

    /**Adding a product */
    async addAProduct(productData){
        try {
            const response = await axios.post('/products/add',
        { headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
    });
            if(!response.ok){
                throw new Error('failed to add product')
            }
           return response.data

        } catch (error) {
            console.log(error)
            throw new Error('Something went wrong')
        }
    }

    /**Updating  a product */

    async updatingAProduct(productId , productData){
        try {
            const resposne = await axios.put(
                `/products/${productId}`,
                {
                    headers:{
                        'Content-type' : 'application/json',
                    },
                    body:JSON.stringify(productData)
                }
            );
            if(!resposne.ok){
                throw new Error('Something went wrong while updating the product');
            }
            return resposne.data
        } catch (error) {
            throw new Error(error);
        }
    }

    /**Deleting   a product */
    async deleteAProduct (productId){
        try {
            const response = await axios.delete(`/products/${productId}`)
            if(!response.ok){
                throw new Error("Something went wrong while deleting the products")
            }
        console.log(response.data)    
        return response.data
        } catch (error) {
            throw new Error('Something went wrong')
        }
    }

}


const productServivce = new ProductService();

export default productServivce;