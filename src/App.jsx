import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Styles
import GlobalStyle from "./styles/GlobalStyle";

// Pages
import Home from "./pages/Home";

import CycleElimination from "./pages/CycleElimination";
import CycleEliminationVisualize from "./pages/CycleEliminationVisualize";

import RoundRobin from "./pages/RoundRobin";
import RoundRobinVisualize from "./pages/RoundRobinVisualize";

import RoundRobinProof from "./pages/RoundRobinProof";
import CycleEliminationProof from "./pages/CycleEliminationProof";

import Page404 from "./pages/Page404";

// Components
import Header from "./components/Header";

const App = (props) => {
  const contentContainerStyle = {
    // minHeight: "calc(100vh - 64px)",
    // backgroundColor: "white",
    marginTop: "64px",
  };

  return (
    // snackbar to show alerts
    <SnackbarProvider maxSnack={1} autoHideDuration={1000}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Header />

          <div style={contentContainerStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cycle-elimination" element={<CycleElimination />} />
              <Route
                path="/cycle-elimination-visualize"
                element={<CycleEliminationVisualize />}
              />

              <Route path="/round-robin" element={<RoundRobin />} />
              <Route
                path="/round-robin-visualize"
                element={<RoundRobinVisualize />}
              />

              <Route
                path="/round-robin-proof"
                element={<RoundRobinProof />}
              />

              <Route
                path="/cycle-elimination-proof"
                element={<CycleEliminationProof />}
              />

              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
