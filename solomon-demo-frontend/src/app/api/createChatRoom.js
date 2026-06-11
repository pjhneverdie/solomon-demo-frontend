import { apiFetch } from "./apiClient";

export async function createChatRoom(issueTitle) {
    const response = await fetch("/chat/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            issueTitle,
        }),
    });

    if (!response.ok) {
        throw new Error("재판 생성 실패");
    }

    return response.json();
}