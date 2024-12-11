import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";
import { refreshToken } from "./store/global/actions";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import AppLoader from "./components/AppLoader";
import { LoadScript } from "@react-google-maps/api";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const libraries = ["places"];
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, []);

  return (
    <Suspense fallback={<AppLoader />}>
      <LoadScript
        googleMapsApiKey={googleMapsApiKey}
        libraries={libraries}
        render={(googleMaps, error) =>
          googleMaps ? (
            <div>{error ? error : <AppLoader />}</div>
          ) : (
            <div>
              {error === "Network Error" ? (
                <div className="fixed flex items-center justify-center w-full h-full gap-2 text-white bg-grey-dark">
                  <div className="text-lg text-white">{error}</div>
                </div>
              ) : (
                <AppLoader />
              )}
            </div>
          )
        }
      >
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router} />
        </DndProvider>
      </LoadScript>
    </Suspense>
  );
}

export default App;
