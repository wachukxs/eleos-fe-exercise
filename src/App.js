import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/404-error";
import ListUsers from "./pages/list-users";
import UserDetails from "./pages/user-details";
import AddAndListTasks from "./pages/add-and-list-tasks";

export const routes = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        label: "Home",
        element: <AddAndListTasks />,
      },
      {
        path: "/users",
        label: "Users",
        element: <ListUsers />,
      },
      {
        path: "users/:userId",
        label: "User Details",
        element: <UserDetails />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
