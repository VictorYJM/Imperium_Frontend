import apiClient from "../../lib/axios";
import type { Profile } from "../types";

export const getUserProfile = async(): Promise<Profile> => {
    try {
        const response = await apiClient.get<Profile>("/users/me");
        return response.data;
    }

    catch (error) { throw error; }
}
