import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { StompSessionProvider } from "react-stomp-hooks";
import ChatPage from './pages/ChatPage.jsx';


function Root() {
  return (
    <ChatPage />
  );
}

createRoot(document.getElementById('root')).render(
  <Root />
)
