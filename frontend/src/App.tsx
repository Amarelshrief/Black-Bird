import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/CartItems/Details";
import Payment from "./components/CartItems/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Products /> },
      { path: "/checkout", element: <Details /> },
      { path: "/payment", element: <Payment /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
