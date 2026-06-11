import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { API_BASE_URL } from "../../app/const/appConstant";
import { StompSessionProvider, useSubscription, useStompClient } from "react-stomp-hooks";
import { useMemberStore } from "../../stores/useMemberStore";
import Sidebar from "./SideBar";
import ChatRoomList from "./ChatRoomList";

const handleConnect = (frame) => {
    console.log('STOMP 연결 프레임 받음, 헤더:', frame.headers);
};

const handleDisConnect = (frame) => {
    console.log('STOMP 연결 종료 프레임 받음, 헤더:', frame.headers);
};

const handleStompError = (frame) => {
    console.log('STOMP 에러 프레임 받음:, 헤더', frame.headers);
};

const handleWebSocketClose = (event) => {
    console.log('웹소켓 종료됨:', event);
};

const handleWebSocketError = (event) => {
    console.log('웹소켓 에러:', event);
};

export default function ChatLayout() {
    const [open, setOpen] = useState(false);

    return (
        <StompSessionProvider
            url={`${API_BASE_URL}/ws-stomp`}
            reconnectDelay={0}
            onConnect={handleConnect}
            onDisconnect={handleDisConnect}
            onStompError={handleStompError}
            onWebSocketClose={handleWebSocketClose}
            onWebSocketError={handleWebSocketError}
        >
            <div className="w-screen h-screen flex">
                <Sidebar open={open} >
                    <ChatRoomList />
                </Sidebar>

                <dd />
                <div className="flex-1 h-full flex flex-col relative">
                    <div className="h-12 flex flex-row justify-between items-center px-4 z-10 bg-white/80">
                        <button className="h-8 w-8" onClick={() => setOpen(!open)}>
                            <Bars3Icon className="h-full text-gray-600" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll">
                        <Outlet />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full pt-10 pb-6 px-4  ">
                        <div className="max-w-3xl mx-auto">
                            <div className="w-full flex items-center bg-[#f0f4f9] rounded-full px-4 py-3 focus-within:bg-white focus-within:ring-1 focus-within:ring-gray-200 shadow-lg transition-all">
                                <input
                                    type="text"
                                    placeholder="Gemini에게 질문하기"
                                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                                />
                                <button className="ml-2 p-2 hover:bg-gray-200 rounded-full transition-colors">
                                    <span className="text-xs font-bold">전송</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StompSessionProvider>
    );
}

function dd() {
    const member = useMemberStore((state) => state.member);

    useSubscription(`${API_BASE_URL}/ws-stomp/user/${member.id}`, (message) => setLastMessage(message.body), { receipt: 'roomId' });
    return (
        <div></div>
    );
}