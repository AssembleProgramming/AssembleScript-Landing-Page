import React, { useState, useEffect, useMemo } from "react";
import "./MainContest.scss";
import AssembleNav from "../../../Components/Navbar/Navbar";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { startTime, endTime } from "../StartTime";
import Footer from "../../../Components/Footer/Footer";
import Logininfo from "../../../Components/Logininfo/Logininfo";
import RulesBullet from "../../../Components/RulesBullet/RulesBullet";
import { ContestDetails, ContestRules } from "../Data/ContestData";
import ContestRegister from "../../../Components/RegisterForContest/ContestRegister";
import LoginLoader from "../../LoginLoader/LoginLoader";

const calculateTimeRemaining = (startTime, endTime, currentTime) => {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();

  if (currentTime < start) {
    const difference = start - currentTime;
    return formatTime(difference);
  } else if (currentTime < end) {
    const difference = end - currentTime;
    return formatTime(difference);
  } else {
    return "Contest has ended";
  }
};

const formatTime = (difference) => {
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const Countdown = ({ startTime, endTime, currentTime }) => {
  const timeRemaining = useMemo(() => calculateTimeRemaining(startTime, endTime, currentTime), [startTime, endTime, currentTime]);

  return (
    <div className="contest-start-badge">
      <div className="text">
        <p>
          {currentTime < startTime ? (
            <span>The contest will start in: <b style={{ fontWeight: 600, color: "green" }}>{timeRemaining}.</b></span>
          ) : currentTime < endTime ? (
            <span>The contest will end in: <b style={{ fontWeight: 600, color: "orange" }}>{timeRemaining}.</b></span>
          ) : (
            <span><b style={{ fontWeight: 600, color: "red" }}>The contest has ended.</b></span>
          )}
        </p>
      </div>
      <div className="add-to-cal">
        <AddToCalendarButton
          buttonStyle="text"
          name="AssembleScript Codefinity Contest"
          options={["Apple", "Google", "Outlook.com", "iCal"]}
          startDate="2023-12-3"
          endDate="2023-12-3"
          startTime="10:00"
          endTime="12:30"
          timeZone="Asia/Calcutta"
        ></AddToCalendarButton>
      </div>
    </div>
  );
};

const MainContest = ({ user, isLoggingIn }) => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const newCurrentTime = new Date().getTime();
      setCurrentTime(newCurrentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {
        isLoggingIn
          ?
          <LoginLoader />
          :
          <>
            <AssembleNav />
            <div className="main-contest-page">
              <h2>Codefinity Challenge</h2>

              <Countdown startTime={startTime} endTime={endTime} currentTime={currentTime} />

              <div className="contest-info">
                <div className="col-left">
                  <Logininfo user={user} />
                </div>
                <div className="col-right">
                  {
                    user.length
                      ?
                      user[0].Registered
                        ?
                        <h6 style={{
                          color: "green",
                          border: "2px solid green",
                          background: "#00800024",
                          padding: 16,
                          borderRadius: 6
                        }}>
                          <i style={{
                            marginRight: 5
                          }}
                            class="fa-regular fa-circle-check"></i>
                          Your team is registered for contest. All the best !!!
                        </h6>
                        :
                        <h6 style={{
                          color: "#dc0202",
                          border: "2px solid #dc0202",
                          background: "#ff000017",
                          padding: 16,
                          borderRadius: 6
                        }}>
                          <i style={{
                            marginRight: 5
                          }}
                            class="fa-regular fa-circle-xmark"></i>
                          Your team is not registered for the contest. Register as soon as possible.
                        </h6>
                      :
                      <>
                      </>
                  }

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
                    <br />
                    Login and Register for the contest in advance and fill out the
                    form.
                  </p>

                  <h5 style={{ marginTop: 20 }}>🏆Prizes🏆</h5>
                  <ul>
                    <li>
                      Contestants ranked 1st will win a AssembleScript Waterbottle.
                    </li>
                    <li>Contestants ranked 2nd~5th will win surprise goodies.</li>
                    <li>
                      Remaining all participants will receive laptop stickers and a lot
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
          </>
      }
    </div>
  );
};

export default MainContest;
