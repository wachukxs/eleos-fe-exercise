import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/404-error";
import ListUsers from "./pages/list-users";
import UserDetails from "./pages/user-details";
import AddAndListTasks from "./pages/add-and-list-tasks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AddAndListTasks />,
        },
        {
          path: "/users",
          element: <ListUsers />,
        },
        {
          path: "users/:userId",
          element: <UserDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
