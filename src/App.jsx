import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Docs from "./Pages/Docs/Latest/Docs";
import Playground from "./Pages/CodePlayground/Playground";
import Keywords from "./Pages/Docs/Keywords/Keywords";
import Comments from "./Pages/Docs/Comments/Comments";
import Variables from "./Pages/Docs/Variables/Variables";
import Print from "./Pages/Docs/Print/Print";
import Switch from "./Pages/Docs/Switch/Switch";
import Conditionals from "./Pages/Docs/Conditionals/Conditionals";
import Loops from "./Pages/Docs/Loops/Loops";
import Arrays from "./Pages/Docs/Arrays/Arrays";
import Datatypes from "./Pages/Docs/Datatypes/Datatypes";
import Operators from "./Pages/Docs/Operators/Operators";
import Builtinmethods from "./Pages/Docs/Builtinmethods/Builtinmethods";

function App() {
  const Naam = `
  ▄████████    ▄████████    ▄████████    ▄████████   ▄▄▄▄███▄▄▄▄   ▀█████████▄   ▄█          ▄████████         ▄████████  ▄████████    ▄████████  ▄█     ▄███████▄     ███     
 ███    ███   ███    ███   ███    ███   ███    ███ ▄██▀▀▀███▀▀▀██▄   ███    ███ ███         ███    ███        ███    ███ ███    ███   ███    ███ ███    ███    ███ ▀█████████▄ 
 ███    ███   ███    █▀    ███    █▀    ███    █▀  ███   ███   ███   ███    ███ ███         ███    █▀         ███    █▀  ███    █▀    ███    ███ ███▌   ███    ███    ▀███▀▀██ 
 ███    ███   ███          ███         ▄███▄▄▄     ███   ███   ███  ▄███▄▄▄██▀  ███        ▄███▄▄▄            ███        ███         ▄███▄▄▄▄██▀ ███▌   ███    ███     ███   ▀ 
▀███████████ ▀███████████ ▀███████████ ▀▀███▀▀▀     ███   ███   ███ ▀▀███▀▀▀██▄  ███       ▀▀███▀▀▀          ▀███████████ ███        ▀▀███▀▀▀▀▀   ███▌ ▀█████████▀      ███     
 ███    ███          ███          ███   ███    █▄  ███   ███   ███   ███    ██▄ ███         ███    █▄                ███ ███    █▄  ▀███████████ ███    ███            ███     
 ███    ███    ▄█    ███    ▄█    ███   ███    ███ ███   ███   ███   ███    ███ ███▌    ▄   ███    ███         ▄█    ███ ███    ███   ███    ███ ███    ███            ███     
 ███    █▀   ▄████████▀   ▄████████▀    ██████████  ▀█   ███   █▀  ▄█████████▀  █████▄▄██   ██████████       ▄████████▀  ████████▀    ███    ███ █▀    ▄████▀         ▄████▀      -by SBSK codes
                                                                                ▀                                                     ███    ███                               
 `;
  console.log(Naam);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
