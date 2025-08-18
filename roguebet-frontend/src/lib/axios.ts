import axios from "axios";
import { useAuthStore } from "../shared/store/useAuthStore";

const apiClient=  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use(
    (config) => {
        const accessToken = useAuthStore.getState().session?.access_token;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;