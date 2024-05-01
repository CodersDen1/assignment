/* eslint-disable no-useless-catch */
import axios from "axios";
import Cookies from "js-cookie";

export class AuthService{

    async loginUser(username, password) {
        try {
          const response = await axios.post('https://dummyjson.com/auth/login', {
            username: username,
            password: password,
          });
          const token = response.data.token;
          Cookies.set('auth_token', token, { expires: 7 });
          Cookies.set('is_logged_in', 'true', { expires: 7 });
          return response.data;
        } catch (error) {
          throw error;
        }
      }
    

      async refreshUserToken() {
        try {
          const token = Cookies.get('auth_token');
          if (!token) {
            throw new Error('Token not found');
          }
          
          const response = await axios.post('https://dummyjson.com/auth/refresh', {
            expiresInMins: 30, 
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          
          const refreshedToken = response.data.token;
          Cookies.set('auth_token', refreshedToken, { expires: 7 }); 
          
          return response.data;
        } catch (error) {
          throw error;
        }
      }
    

      async getUserInfo() {
        try {
          const token = Cookies.get('auth_token');
          if(!token){
              throw new Error('Token not found')
          }
       const response = await axios.get('https://dummyjson.com/auth/me',{
          headers:{
              Authorization:`Bearer ${token}`
          }
       });
       return response.data;
        } catch (error) {
          throw error;
        }
      }
    }


const authService = new AuthService();

export default authService;