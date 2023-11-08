import React, { useState, useEffect } from "react";
import "./MainContest.scss";
import AssembleNav from "../../../Components/Navbar/Navbar";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { startTime, endTime } from "../StartTime";
import Footer from "../../../Components/Footer/Footer";
import Logininfo from "../../../Components/Logininfo/Logininfo";
import RulesBullet from "../../../Components/RulesBullet/RulesBullet";
import { ContestDetails, ContestRules } from "../Data/ContestData";
import ContestRegister from "../../../Components/RegisterForContest/ContestRegister";


const calculateTimeRemaining = (startTime, endTime, currentTime) => {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();

  if (currentTime < start) {
    // Before contest starts, show timeRemainingToStart
    const difference = start - currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else if (currentTime < end) {
    // Contest is ongoing, show timeRemainingToEnd
    const difference = end - currentTime;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  } else {
    // Contest has ended
    return "Contest has ended";
  }
};


const MainContest = ({ user }) => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(startTime, endTime, currentTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrentTime = new Date().getTime();
      setCurrentTime(newCurrentTime);
      setTimeRemaining(calculateTimeRemaining(startTime, endTime, newCurrentTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div>
      <AssembleNav />
      <div className="main-contest-page">
        <h2>Codefinity Challenge</h2>

        <div className="contest-start-badge">
          <div className="text">
            <p>
              {currentTime < startTime ? (
                <p>The contest will start in: <b style={{ fontWeight: 600, color: "green" }}>{timeRemaining}</b></p>
              ) : currentTime < endTime ? (
                <p>The contest will end in: <b style={{ fontWeight: 600, color: "orange" }}>{timeRemaining}</b></p>
              ) : (
                <p><b style={{ fontWeight: 600, color: "red" }}>The Contest has ended</b></p>
              )}
            </p>
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
              <p>
                Login and Register for the contest in advance and fill out the
                form.
              </p>
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
