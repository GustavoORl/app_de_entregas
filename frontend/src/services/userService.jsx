import api from "./api";

export default async function getMe(){
    const response = await api.get("/auth/me");

    return response.data;
}