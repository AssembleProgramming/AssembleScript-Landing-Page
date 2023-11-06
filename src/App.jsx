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
import Contest from "./Pages/Contest/Contest";
import Functions from "./Pages/Docs/Functions/Functions";
import Team from "./Pages/Team/Team";

function App() {
  const Naam = `
  ▄████████    ▄████████    ▄████████    ▄████████   ▄▄▄▄███▄▄▄▄   ▀█████████▄   ▄█        ▄████████       ▄████████  ▄████████    ▄████████    ▄█     ▄███████▄     ███     
 ███    ███   ███    ███   ███    ███   ███    ███ ▄██▀▀▀███▀▀▀██▄   ███    ███ ███       ███    ███      ███    ███ ███    ███   ███    ███   ███    ███    ███ ▀█████████▄ 
 ███    ███   ███    █▀    ███    █▀    ███    █▀  ███   ███   ███   ███    ███ ███       ███    █▀       ███    █▀  ███    █▀    ███    ███   ███▌   ███    ███    ▀███▀▀██ 
 ███    ███   ███          ███         ▄███▄▄▄     ███   ███   ███  ▄███▄▄▄██▀  ███      ▄███▄▄▄          ███        ███         ▄███▄▄▄▄██▀   ███▌   ███    ███     ███   ▀ 
▀███████████ ▀███████████ ▀███████████ ▀▀███▀▀▀     ███   ███   ███ ▀▀███▀▀▀██▄  ███     ▀▀███▀▀▀        ▀██████████ ███        ▀▀███▀▀▀▀▀     ███▌ ▀█████████▀      ███     
 ███    ███          ███          ███   ███    █▄  ███   ███   ███   ███    ██▄ ███       ███    █▄              ███ ███    █▄  ▀███████████   ███    ███            ███     
 ███    ███    ▄█    ███    ▄█    ███   ███    ███ ███   ███   ███   ███    ███ ███▌    ▄ ███    ███       ▄█    ███ ███    ███   ███    ███   ███    ███            ███     
 ███    █▀   ▄████████▀   ▄████████▀    ██████████  ▀█   ███   █▀  ▄█████████▀  █████▄▄██ ██████████     ▄████████▀  ████████▀    ███    ███   █▀    ▄████▀         ▄████▀  -By SBSKcodes
                                                                                ▀                                                 ███    ███                               
 `;
  console.log(Naam);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/docs/latest" element={<Docs />} />
            <Route path="/docs/keywords" element={<Keywords />} />
            <Route path="/docs/comments" element={<Comments />} />
            <Route path="/docs/variables" element={<Variables />} />
            <Route path="/docs/print" element={<Print />} />
            <Route path="/docs/switch" element={<Switch />} />
            <Route path="/docs/conditionals" element={<Conditionals />} />
            <Route path="/docs/loops" element={<Loops />} />
            <Route path="/docs/arrays" element={<Arrays />} />
            <Route path="/docs/datatypes" element={<Datatypes />} />
            <Route path="/docs/operators" element={<Operators />} />
            <Route path="/docs/builtinmethods" element={<Builtinmethods />} />
            <Route path="/docs/functions" element={<Functions />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
