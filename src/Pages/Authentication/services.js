import { axiosInstance } from "../../utils/config/apiConfig";
import { clear } from "../../utils/config/storageConfig";


export const login = async ()=>{
    const response = await axiosInstance.post('auth/login');
    return response;
}

export const register = async ()=>{
    const response = await axiosInstance.post('auth/register');
    return response;
}
export const logout=()=>{
    clear();
    window.location.href='/';
}