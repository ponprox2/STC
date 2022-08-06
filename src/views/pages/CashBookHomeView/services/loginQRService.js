import {API_LOGIN_QR ,API_LOGIN_INFO,API_LOGIN_CONFIRMATION} from "./configs"
// import BASE_URL from 'src/config'
import axios from "axios"


class LoginQRService {

    loginQR  = async (body) =>{
        const response = await axios.post(API_LOGIN_QR,{...body})
        return response
    }

    loginQRInfo = async (data) =>{ 
        try {
            const response = await axios.post(API_LOGIN_INFO,{...data})
            return response
        } catch (error) {
            return error
        }
    }

    loginQRConfirmation = async (data) => {
        try {
            const response = await axios.post(API_LOGIN_CONFIRMATION,data)
            return response  
        } catch (error) {
            return error      
        }
    }
}

const loginQRService = new LoginQRService();
export default loginQRService