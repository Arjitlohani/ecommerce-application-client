import axios from "axios";
import { environmentConfig } from "./environmentConfig";
// import { getItem } from "./storageConfig";

export const axiosInstance = axios.create({
    baseURL:environmentConfig.baseURL
});
