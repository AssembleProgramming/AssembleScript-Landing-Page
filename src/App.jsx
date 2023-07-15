import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Docs from "./Pages/Docs/Latest/Docs";
import Playground from "./Pages/CodePlayground/Playground";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/docs/latest" element={<Docs/>} />
            <Route path="/playground" element={<Playground/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
