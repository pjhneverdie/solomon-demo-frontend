import { useChatStore } from "../../stores/useChatStore";
import ChatRoomCard from "./ChatRoomCard";

export default function ChatRoomList() {
    const chatRooms = useChatStore((state) => state.chatRooms);

    return (
        <div className="flex flex-col">
            {Object.values(chatRooms).length === 0 ? (
                <div className="p-4 text-white/50 text-sm">
                    채팅방이 없습니다
                </div>
            ) : (
                Object.values(chatRooms).map((chatRoom) => (
                    <ChatRoomCard key={chatRoom.chatRoomUuid} chatRoom={chatRoom} />
                ))
            )}
        </div>
    );
}