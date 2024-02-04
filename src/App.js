import {HashRouter, Routes} from "react-router-dom";
import NavBare from "./Component/NavBar/NavBare";
import {Route} from "react-router-dom";
// import DetailsPage from "./Page/DetailsPage";
import React, {lazy} from "react";
const Home = lazy(() => import("./Page/HomePage"));
const DetailsPage = lazy(() => import("./Page/DetailsPage"));
function App() {
  return (
    <div className="app">
      <NavBare />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div className="spinner-border d-flex  mx-auto" role="status">
                    <span className="visually-hidden mx-auto">Loading...</span>
                  </div>
                }
              >
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/details/:id"
            element={
              <React.Suspense>
                <DetailsPage />
              </React.Suspense>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
