import { useState, useEffect } from 'react'
import { StompSessionProvider, useSubscription, useStompClient } from "react-stomp-hooks";

const handleLogin = () => {
    window.location.href = "https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/oauth2/authorization/kakao";
};

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

    return (
        <StompSessionProvider
            url={"https://humble-goggles-v6gv597j9qw9fjr4-8080.app.github.dev/ws-stomp"}
            enabled={isAuthenticated}
            reconnectDelay={0}
            onConnect={handleConnect}
            onDisconnect={handleDisConnect}
            onStompError={handleStompError}
            onWebSocketClose={handleWebSocketClose}
            onWebSocketError={handleWebSocketError}
        >
            <SubscribingComponent />
            <div>
                <button onClick={handleLogin}>
                    카카오 로그인
                </button>
            </div>
            <SendingMessages/>
        </StompSessionProvider>

    );

}

function SubscribingComponent() {
    const [lastMessage, setLastMessage] = useState("No message received yet");

    //Subscribe to /topic/test, and use handler for all received messages
    //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
    //If the STOMP connection itself is lost they are however restored on reconnect.
    //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
    useSubscription("/topic/test", (message) => setLastMessage(message.body));

    return <div>Last Message: {lastMessage}</div>;
}

function SendingMessages() {
    const [message, setMessage] = useState(""); // 텍스트 폼 입력 상태
    const stompClient = useStompClient(); // STOMP 클라이언트

    // 메시지 보내는 함수
    const sendMessage = () => {
        if (stompClient && message.trim() !== "") {
            // Send Message
            stompClient.publish({
                destination: "/topic/test",
                body: message, // 입력된 메시지
            });
            setMessage(""); // 메시지 전송 후 입력 필드 비우기
        } else {

            // Handle error if stompClient is undefined or message is empty
            console.log("STOMP client is not connected or message is empty.");
        }
    };

    
    // 메시지 입력 시 상태 업데이트
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );

}

export default ChatPage;