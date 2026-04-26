import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import ChatLayout from './pages/ChatLayout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  [
    // {
    //   path: "/login",
    //   element: <LoginPage />
    // },
    {
      path: "/",
      element: <ChatLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        // {
        //   index: true,
        //   path: "chat/:chatId",
        //   element: <ChatRoomPage />
        // },
      ],
    },
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
