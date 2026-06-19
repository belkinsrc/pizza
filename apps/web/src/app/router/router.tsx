import { createBrowserRouter } from "react-router";
import App from "../App";
import { MainPage } from "@/pages/main";
import { ProductsPage } from "@/pages/products";
import { CartPage } from "@/pages/cart";

import adminRoutes from "pizza_admin/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
  {
    path: "/admin",
    children: [...adminRoutes],
  },
]);

export { router };
