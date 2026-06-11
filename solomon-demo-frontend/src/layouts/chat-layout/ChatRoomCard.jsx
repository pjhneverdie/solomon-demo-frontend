import { NavLink } from "react-router-dom";

export default function ChatRoomCard({ chatRoom }) {
    return (
        <NavLink
            to={`/chat/${chatRoom.ChatRoomUuid}`}
            className={({ isActive }) =>
                isActive
                    ? "block p-3 border-b border-white/10 bg-white/10"
                    : "block p-3 border-b border-white/10 hover:bg-white/5"
            }
        >
            <div>
                <div className="font-medium text-white">
                    {chatRoom.issueTitle}
                </div>

                <div className="text-sm text-white/60 truncate">
                    {chatRoom.lastMessage}
                </div>
            </div>
        </NavLink>
    );
}