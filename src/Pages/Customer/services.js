import { axiosInstance } from "../../utils/config/apiConfig";

export const product = async ()=>{

    try {
        const response = await axiosInstance.get('product');
        console.log(response,"response <><><><<<>><>>>>>>><>>")
        
    } catch (error) {

        console.error("error",error)
        
    }

}