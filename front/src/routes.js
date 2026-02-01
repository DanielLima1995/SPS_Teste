import { createBrowserRouter } from "react-router-dom"

import Users from "./pages/Users"
import UserEdit, { userLoader } from "./pages/UserEdit"
import Pages from "./pages/SignIn"
import UserNew from "./pages/UserNew"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:userId",
    element: <UserEdit />,
    loader: userLoader,
  },
  {
    path: "/users/new",
    element: <UserNew />,
  }
])

export default router
