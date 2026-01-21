// App.tsx
import { Routes, Route } from "react-router-dom";
import Valentine from "./Valentine";
import Success from "./Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Valentine />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
