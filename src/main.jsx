import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error.jsx";
import Accueil from "./Accueil.jsx";
import GiftList from "./components/GiftList.jsx";
import GiftDetails from "./components/GiftDetails.jsx";
import Basket from "./pages/Basket.jsx";
import App from "./App.jsx";
import "./index.css";
import PanierGiftDetails from "./components/PanierGiftDetails.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/gift",
        element: <GiftList />,
      },
      {
        path: "/gift/:id",
        element: <GiftDetails />,
      },
      {
        path: "/panier",
        element: <Basket />,
      },
      {
        path: "/panier/:id",
        element: <PanierGiftDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
