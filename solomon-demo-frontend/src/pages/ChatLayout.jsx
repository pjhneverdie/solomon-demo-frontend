import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";

export default function ChatLayout() {
    const [open, setOpen] = useState(true);

    return (
        <div className="w-screen h-screen flex">
            <aside className={`
                fixed sm:relative inset-y-0 left-0
                flex flex-col border-r border-black/20
                ${open ? "w-full sm:w-72" : "w-0 overflow-hidden"}
                transition-all duration-300 bg-[#202123] text-white
            `}>
            </aside>

            <div className="flex-1 h-full flex flex-col relative">
                <div className="h-12 flex flex-row justify-between items-center px-4 z-10 bg-white/80">
                    <button className="h-8 w-8" onClick={() => setOpen(!open)}>
                        <Bars3Icon className="h-full text-gray-600" />
                    </button>
                    <button className="text-sm font-medium">Login</button>
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
    );
}