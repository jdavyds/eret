import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import top from "./assets/top.png";
import Home from "./pages/home";
import Share from "./pages/share";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/share/:id",
    element: <Share />,
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
      <a href="#top" className="fixed bottom-10 right-20">
        <img
          src={top}
          alt="top"
          className="md:h-14 md:w-14 h-8 w-8 rounded-[50%] shadow-lg"
        />
      </a>
    </div>
  );
}

export default App;
