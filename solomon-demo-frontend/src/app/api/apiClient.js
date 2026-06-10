import { API_BASE_URL } from "../const/appConstant";

export async function apiFetch(path, options = {}) {
    return fetch(`${API_BASE_URL}${path}`, {
        credentials: "include",
        ...options,
    });
}