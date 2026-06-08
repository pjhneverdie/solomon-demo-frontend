import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import LoginPage from './pages/LoginPage';
import ChatLayout from './pages/ChatLayout';
import HomePage from './pages/HomePage';
import { authLoader } from "./loaders/authLoader";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ChatLayout />,
    loader: authLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
