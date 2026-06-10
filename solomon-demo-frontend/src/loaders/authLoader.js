import { redirect } from "react-router";
import { useMemberStore } from "../stores/useMemberStore";
import { apiFetch } from "../app/api/apiClient";

export async function authLoader() {
    const store = useMemberStore.getState();

    try {
        const res = await apiFetch("/member/me?ts=" + Date.now());

        if (!res.ok) {
            store.clearMember();
            throw redirect("/login");
        }

        const { value: member } = await res.json();
        store.setMember(member);
    } catch {
        store.clearMember();
        throw redirect("/login");
    }
}