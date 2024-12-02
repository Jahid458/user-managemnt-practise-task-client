import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUsers from "./Components/AddUsers.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";
import Users from "./Components/Users.jsx";
import "./index.css";
import MainLayout from "./Layout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/addUsers",
        element: <AddUsers></AddUsers>,
      },
      {
        path: "/Users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://user-management-server-blush.vercel.app/users"),
      },
      {
        path: "/Users/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://user-management-server-blush.vercel.app/users/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
