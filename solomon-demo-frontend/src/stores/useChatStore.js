import { create } from "zustand";

/**
 * {
 * chatRoomUuid: {chatRoomUuid},
 * issueTitle: {issueTitle}
 * }
 */
export const useChatStore = create((set) => ({
    chatRooms: {},

    addChatRoom: (chatRoom) =>
        set((state) => ({
            chatRooms: {
                ...state.chatRooms,
                [chatRoom.chatRoomUuid]: {
                    ...chatRoom,
                    messages: chatRoom.messages ?? [],
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