import React, { useState, useEffect } from "react";
import "./MainContest.scss";
import AssembleNav from "../../../Components/Navbar/Navbar";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import startTime, { startDate } from "../StartTime";
import Footer from "../../../Components/Footer/Footer";
import Logininfo from "../../../Components/Logininfo/Logininfo";
import RulesBullet from "../../../Components/RulesBullet/RulesBullet";
import { ContestDetails, ContestRules } from "../Data/ContestData";
import ContestRegister from "../../../Components/RegisterForContest/ContestRegister";

console.log(ContestDetails);
console.log(ContestRules);

const calculateTimeRemaining = (startTime) => {
  const now = new Date().getTime();
  const start = new Date(startTime).getTime();
  const difference = start - now;

  if (difference <= 0) {
    // Contest has started, return a message or handle it as needed
    return "Contest Started";
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const MainContest = ({ user }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(startTime)
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(startTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTime]);
  return (
    <div>
      <AssembleNav />
      <div className="main-contest-page">
        <h2>Codefinity Challenge</h2>

        <div className="contest-start-badge">
          <div className="text">
            <p>The contest will start in: {timeRemaining}</p>
          </div>
          <div className="add-to-cal">
            <AddToCalendarButton
              buttonStyle="text"
              name="AssembleScript Contest"
              options={["Apple", "Google"]}
              location="Jspm's RSCOE, Tathawade"
              startDate="2023-10-23"
              endDate="2023-10-23"
              startTime="10:15"
              endTime="23:30"
              timeZone="Asia/Calcutta"
            ></AddToCalendarButton>
          </div>
        </div>

        <div className="contest-info">
          <div className="col-left">
            <Logininfo user={user} />
          </div>
          <div className="col-right">
            <h4>
              Welcome to the <span id="codefinity">"Codefinity Challenge"</span>{" "}
              of AssembleScript
            </h4>
            <p>
              This contest is sponsored by{" "}
              <a href="https://github.com/AssembleProgramming">
                Assemble Programming
              </a>
              .
              <h6>
                Login and Register for the contest in advance and fill out the
                form.
              </h6>
            </p>

            <h5 style={{ marginTop: 20 }}>🏆Prizes🏆</h5>
            <ul>
              <li>
                Contestants ranked 1st will win a AssembleScript Waterbottel.
              </li>
              <li>Contestants ranked 2nd~5th will win surprise goodies.</li>
              <li>
                Remaning all participants will recieve laptop stickers and lot
                of enjoyment!!
              </li>
            </ul>

            <h5>🛡 Codefinity Challenge Rules.</h5>
            <p>
              The Codefinity Challenge tests your ability to translate code
              snippets from any programming language into AssembleScript. This
              challenge encourages creativity, logic, and familiarity with
              diverse coding languages. Please read it thoroughly to ensure a
              fair and enjoyable experience.
            </p>

            <div style={{
              marginTop: 20
            }}>
              <h5> 🔹 Contest Details</h5>
              <RulesBullet rules={ContestDetails} />
            </div>

            <div style={{
              marginTop: 20
            }}>
              <h5> 🔹 Contest Rules</h5>
              <RulesBullet rules={ContestRules} />
            </div>

          </div>
        </div>


        <div className="register-start-compo">
          <ContestRegister user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContest;
