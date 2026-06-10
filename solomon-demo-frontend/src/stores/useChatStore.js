import { create } from "zustand";

export const useChatStore = create((set) => ({
    chatRooms: {},

    addRoom: (room) =>
        set((state) => ({
            chatRooms: {
                ...state.chatRooms,
                [room.chatRoomUuid]: {
                    ...room,
                    messages: room.messages ?? [],
                },
            },
        })),

    addMessage: (chatRoomUuid, message) =>
        set((state) => {
            const room = state.chatRooms[chatRoomUuid];

            if (!room) return state;

            return {
                chatRooms: {
                    ...state.chatRooms,
                    [chatRoomUuid]: {
                        ...room,
                        messages: [...room.messages, message],
                    },
                },
            };
        }),

    setMessages: (chatRoomUuid, messages) =>
        set((state) => {
            const room = state.chatRooms[chatRoomUuid];

            if (!room) return state;

            return {
                chatRooms: {
                    ...state.chatRooms,
                    [chatRoomUuid]: {
                        ...room,
                        messages,
                    },
                },
            };
        }),

    removeRoom: (chatRoomUuid) =>
        set((state) => {
            const nextRooms = { ...state.chatRooms };
            delete nextRooms[chatRoomUuid];

            return { chatRooms: nextRooms };
        }),

    clearRooms: () => set({ chatRooms: {} }),
}));