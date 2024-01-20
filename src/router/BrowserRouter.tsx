import AddProduct from "../component/AddProducts";
import ListProduct from "../component/ListProduct";
import MyReactQuill from "../component/reactQuill";
import MainLayout from "../layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AddProduct />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/view-products",
        element: <ListProduct />,
      },
      {
        path: "/react-quill",
        element: <MyReactQuill />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <PageNotFoundPage />,
  // },
]);

export default router;
