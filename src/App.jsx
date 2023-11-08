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
import MainContest from "./Pages/Contest/MainContestPage/MainContest";
import FAQPage from "./Pages/Contest/ContestFAQ/FAQPage";
import faqs from "./Pages/Contest/ContestFAQ/FAQdata";
import LoginSignUpPage from "./Pages/LoginSignup/LoginSignUpPage";
import { useState } from "react";
import ConsoleLog from "./ConsoleLog";


function App() {
  const [user, setUser] = useState([]);
  ConsoleLog;
  const handleLogin = async (userData) => {
    const teamToken = userData.team;
    try {
      const response = await fetch("https://codefinity-api.vercel.app/getuserdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: teamToken,
        }),
      });

      if (response.ok) {
        const teamData = await response.json();
        const currentTeam = [];
        currentTeam.push(teamData.team);
        setUser(currentTeam);
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

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
            <Route path="/contest/frequently-asked-questions" element={<FAQPage faqs={faqs} />} />
            <Route
              path="/contest/main-contest"
              element={<MainContest user={user} />}
            />
            <Route path="/team" element={<Team />} />
            <Route path="/login-signup" element={<LoginSignUpPage onLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
