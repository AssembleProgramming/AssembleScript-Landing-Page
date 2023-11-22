import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ForgotPassword from "./Pages/Contest/ForgotPasswordPage/ForgotPassword";
import SERVER_LINK from "./API";
import CodefinityPage from "./Pages/Contest/CodefinityPage/CodefinityPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";
import PracticeContest from "./Pages/Contest/PracticeContest/PracticeContest";
import Rankings from "./Pages/Contest/Rankings/Rankings";
import LoginLoader from "./Pages/LoginLoader/LoginLoader";

const cookies = new Cookies();

function App() {
  const [user, setUser] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const token = cookies.get('access_token');

    if (token) {
      handleLogin(token);
    }
  }, [])

  const handleLogin = async (teamToken) => {
    setIsLoggingIn(true);
    try {
      const response = await fetch(`${SERVER_LINK}/getuserdata`, {
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
        // Save the JWT token in a cookie
        cookies.set('access_token', teamToken, {
          path: '/', // access on all pages
          maxAge: 2592000 // max age 30 days
        });
        setUser(currentTeam);
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsLoggingIn(false);
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

            <Route path="/team" element={<Team />} />
            <Route path="/login-signup" element={<LoginSignUpPage onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />


            <Route path="/contest" element={<Contest />} />
            <Route path="/contest/frequently-asked-questions" element={<FAQPage faqs={faqs} />} />
            <Route path="/contest/main-contest" element={<MainContest user={user} isLoggingIn={isLoggingIn} />} />
            <Route path="/contest/codefinity-2023" element={<CodefinityPage user={user} isLoggingIn={isLoggingIn} />} />
            <Route path="/contest/practice" element={<PracticeContest />} />
            <Route path="/contest/codefinity-rankings" element={<Rankings />} />


            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
