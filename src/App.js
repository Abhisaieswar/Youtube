import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
// import ResultsPage from "./components/ResultsPage";

const MainContainer = lazy(() => import("./components/MainContainer"));
const WatchPage = lazy(() => import("./components/WatchPage"));
const ResultsPage = lazy(() => import("./components/ResultsPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <ResultsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
