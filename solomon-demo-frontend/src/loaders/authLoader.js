import { redirect } from "react-router";
import { useMemberStore } from "../stores/useMemberStore";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function authLoader() {
    try {
        console.log("dsadsa");
        await sleep(2000);

        const res = await fetch(
            "https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/member/me",
            {
                credentials: "include",
            }
        );

        if (!res.ok) {
            useMemberStore.getState().clearMember();
            throw redirect("/login");
        }

        const member = await res.json();

        useMemberStore.getState().setMember(member);

        return member;
    } catch (e) {
        useMemberStore.getState().clearMember();
        throw redirect("/login");
    }
}