import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";
import { refreshToken } from "./store/global/actions";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import AppLoader from "./components/AppLoader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, []);

  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
