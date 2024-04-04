import axios from 'axios';
import Cookies from "js-cookie"
const axiosInstance = axios.create({
});

axiosInstance.interceptors.request.use((config) => {
  // const { getToken } = useAuth();
  // const token = await getToken();
  const token = Cookies.get("__session")
  console.log(token)
  if(token) config.headers.Authorization = `Bearer ${token}`;
  
  
  return config;
});

export default axiosInstance;
