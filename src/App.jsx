import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoutes } from "./layout/ProtectedRoutes";
import RootLayouts from "./layout/RootLayouts";
import Login from "./pages/Login";
import Mualliflar from "./pages/Mualliflar";
import { Toaster } from "sonner";

function App() {
  const admin = true;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes admin={admin}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/authors",
      element: <Mualliflar />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />,
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
