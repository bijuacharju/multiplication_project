import { useState } from "react";
import { TableContext } from "./helper/tableContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiplicationProject from "./pages/MultiplicationProject";
import DecisionMaking from "./pages/DecisionMaking";
import Depth from "./pages/Depth";
import StepResult from "./pages/StepResult";
import DynamicResult from "./pages/DynamicResult";

function App() {
  const [multiplicationValue, setMultiplicationValue] = useState(0);
  const [dynamicMultiplication, setDynamicMultiplication] = useState(false);
  const [multiplicationDepth, setMultiPlicationDepth] = useState(0);
  return (
    <TableContext.Provider
      value={{
        multiplicationValue,
        setMultiplicationValue,
        dynamicMultiplication,
        setDynamicMultiplication,
        multiplicationDepth,
        setMultiPlicationDepth,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiplicationProject />} />
          <Route path="/decision-making" element={<DecisionMaking />} />
          <Route path="/depth" element={<Depth />} />
          <Route path="/step-result" element={<StepResult />} />
          <Route path="/dynamic-result" element={<DynamicResult />} />
        </Routes>
      </BrowserRouter>
    </TableContext.Provider>
  );
}

export default App;
