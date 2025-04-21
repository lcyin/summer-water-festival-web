import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Confirmation from "./pages/Confirmation/Confirmation";
import Admin from "./pages/Admin/Admin";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/admin", element: <Admin /> }
]);

export default router;
