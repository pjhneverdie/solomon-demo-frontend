import { useState, useEffect } from 'react'
import { StompSessionProvider } from "react-stomp-hooks";


function ChatPage() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        fetch("https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/member/me", {
            credentials: "include"
        })
            .then(res => res.ok)
            .then(setIsAuthenticated)
            .catch(() => setIsAuthenticated(false));
    }, []);
    


    const handleLogin = () => {
        window.location.href = "https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/oauth2/authorization/kakao";
    };

    return (
        <StompSessionProvider
            url={"https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/ws-stomp"}
            enabled={isAuthenticated}
            reconnectDelay={0}
        >
            <div>
                <button onClick={handleLogin}>
                    카카오 로그인
                </button>
            </div>
        </StompSessionProvider>

    );

}

export default ChatPage;