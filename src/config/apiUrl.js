import axios from "axios";
import { apiConfig } from "./apiConfig";

export const apiUrl = axios.create({
	baseURL: apiConfig.api_url_backend + "/api",
});
