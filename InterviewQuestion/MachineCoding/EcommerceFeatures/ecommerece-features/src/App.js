import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Use react-router-dom
import AppLayout from "./Component/AppLayout";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Header /> // Show Products on home page
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

function App() {
  return (
    <div className="font-bold">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
