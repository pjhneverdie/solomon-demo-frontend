import { create } from "zustand";

export const useMemberStore = create((set) => ({
    member: null,
    setMember: (member) => set({ member }),
    clearMember: () => set({ member: null }),
}));