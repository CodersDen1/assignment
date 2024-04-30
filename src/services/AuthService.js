import axios from "axios";

export class AuthService{

    async loginUser(username , password){
        try{
            const loggedUser =  await axios.post("https://dummyjson.com/auth/login")
                    .then((res)=>console.log(res))
                    .catch(err=> console.log(err))
                return loggedUser;
        }catch(error){
            throw  new error;
        }
    }

    async refreshUserToken(){
        try {
            return await axios.post("https://dummyjson.com/auth/refresh")
                                .then((res)=> console.log(res))
                                .catch(err=> console.log(err));
        } catch (error) {
            throw new error;
        }
    }

    async getUserInfo(){
        try {
            const userDetails  = await axios.get("https://dummyjson.com/auth/me")
                                            .then((res)=>console.log(res))
                                            .catch(err=> console.log(err));
            return userDetails;
        } catch (error) {
            throw new error;
        }
    }
}


const authService = new AuthService();

export default authService;