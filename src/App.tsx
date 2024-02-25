import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./page/main";

function App() {
  const routers = createBrowserRouter([{ path: "/", element: <MainPage /> }]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
