import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import ChatLayout from './layouts/chat-layout/ChatLayout';
import HomePage from './pages/HomePage';
import { authLoader } from "./loaders/authLoader";
import ChatRoomPage from './pages/ChatRoomPage';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ChatLayout />,
    // loader: authLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/chat/:uuid",
        element: <ChatRoomPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
