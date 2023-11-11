import React, { useMemo, useState, useEffect } from 'react'
import './CodefinityPage.scss'
import AssembleNav from '../../../Components/Navbar/Navbar'
import { startTime, endTime } from '../StartTime'
import deadpool from "../../../assets/images/contest-not-started.webp"
import { Link } from 'react-router-dom'
import PageNotFound from '../../PageNotFound/PageNotFound'
import ContestQuestionOne from '../Questions/QuestionOne/ContestQuestionOne'
import ContestQuestionTwo from '../Questions/QuestionTwo/ContestQuestionTwo'
import ContestQuestionThree from '../Questions/QuestionThree/ContestQuestionThree'
import bg from "../../../assets/images/assembleBg.png"


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
        <div className="countdown">
            <div className="text">
                {
                    currentTime < endTime ? (
                        <h3>Time Left: <span>{timeRemaining}</span></h3>
                    ) : (
                        <span><b style={{ fontWeight: 600, color: "red" }}>The contest has ended.</b></span>
                    )
                }
            </div>
        </div>
    );
};

const CodefinityPage = ({ user }) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    const [activeButton, setActiveButton] = useState(1);

    const [isMobile, setIsMobile] = useState(false);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const newCurrentTime = new Date().getTime();
            setCurrentTime(newCurrentTime);
        }, 1000);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        // Initial check on mount
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {!isMobile
                ?
                user.length
                    ?
                    <div className='contest-page-container'>
                        <AssembleNav />
                        {
                            // Contest has not started YET
                            currentTime < startTime
                                ?
                                (
                                    <div className='contest-page-container-inner'>
                                        <div className="contest-not-started">
                                            <div className="contest-not-started-top">
                                                <h1>Oops!</h1>
                                                <h3>Contest Has Not Started Yet!</h3>
                                                <p className='description'>Hey there Avenger the contest has not started yet. Please make sure to come to the page at the time of contest. Till then make sure to register as soon as possible for a thrilling experience.</p>
                                                <p>Here are some useful links instead:</p>
                                                <div className='buttons'>
                                                    <Link to="/contest/main-contest">
                                                        <button>Register</button>
                                                    </Link>
                                                    <Link to="/">
                                                        <button>Home</button>
                                                    </Link>
                                                    <Link to="/docs/latest">
                                                        <button>Documentation</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                // Contest started
                                currentTime < endTime
                                    ?
                                    user[0].Registered
                                        ?
                                        (
                                            <div className="contest-started">
                                                <div className="contest-questions">
                                                    <div className="question-buttons">
                                                        <h5 style={{ margin: 0 }}>LoggedIn As:  <span style={{ color: "#4b32c3", fontWeight: 600 }}>{user[0].TEAM_NAME}</span> </h5>

                                                        <div className='question-btn-container'>
                                                            {[1, 2, 3].map((buttonNumber) => (
                                                                <button
                                                                    key={buttonNumber}
                                                                    className={buttonNumber === activeButton ? 'active' : ''}
                                                                    onClick={() => handleButtonClick(buttonNumber)}
                                                                >
                                                                    {buttonNumber}
                                                                </button>
                                                            ))}
                                                        </div>

                                                        <Countdown startTime={startTime} endTime={endTime} currentTime={currentTime} />
                                                    </div>

                                                    <div className="question-divs">
                                                        {activeButton === 1 && (
                                                            <ContestQuestionOne user={user} />
                                                        )}

                                                        {activeButton === 2 && (
                                                            <ContestQuestionTwo user={user} />
                                                        )}

                                                        {activeButton === 3 && (
                                                            <ContestQuestionThree user={user} />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        <div style={{
                                            width: "100%",
                                            height: "93vh",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            backgroundImage: `url(${bg})`
                                        }}>
                                            <h1 style={{
                                                fontWeight: 800,
                                                color: "#ea1b24",
                                                padding: 10,
                                                fontSize: 130,
                                                fontFamily: "'Inter', sans-serif",
                                                margin: 0,
                                            }}>Oops!</h1>
                                            <h3>You are not registered for the contest.</h3>
                                            <p>
                                                If you have any questions or need assistance, please contact our support team at <a href="mailto:assemblescript@gmail.com">assemblescript@gmail.com</a>
                                            </p>
                                            <div id='buttons'>
                                                <Link to="/playground">
                                                    <button>Playground</button>
                                                </Link>
                                                <Link to="/">
                                                    <button>Home</button>
                                                </Link>
                                                <Link to="/docs/latest">
                                                    <button>Documentation</button>
                                                </Link>
                                            </div>
                                        </div>
                                    // Contest ended
                                    :
                                    (
                                        <div className='contest-page-container-inner'>
                                            <div className="contest-not-started">
                                                <div className="contest-not-started-top">
                                                    <h1>Oops!</h1>
                                                    <h3>Contest Has Ended!</h3>
                                                    <p className='description'>Hey Avenger, The contest has ended. We appreciate your participation! Stay tuned for future events. Ensure you're registered for an upcoming thrilling experience. Thank you for being a part of the excitement!</p>
                                                    <p>Here are some useful links instead:</p>
                                                    <div className='buttons'>
                                                        <Link to="/playground">
                                                            <button>Playground</button>
                                                        </Link>
                                                        <Link to="/">
                                                            <button>Home</button>
                                                        </Link>
                                                        <Link to="/contest/codefinity-rankings">
                                                            <button>Leaderboard</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                        }
                    </div>
                    :
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh', 
                            flexDirection: 'column'
                        }}
                    >
                        <div
                            style={{
                                border: '4px solid rgba(0, 0, 0, 0.1)',
                                borderTop: '4px solid #7444ff',
                                borderRadius: '50%',
                                width: '80px',
                                height: '80px',
                                animation: 'spin 1s linear infinite',
                            }}
                        >
                        </div>
                    </div>
                :
                <>
                    <AssembleNav />
                    <div className="mobile-warning-card">
                        <div className="card-content">
                            <h2>Mobile User Alert</h2>
                            <p>
                                We're sorry, but the contest page is not available for mobile users. For the best experience, please switch to a desktop or laptop device.
                            </p>
                            <p>
                                If you have any questions or need assistance, please contact our support team at <a href="mailto:assemblescript@gmail.com">assemblescript@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

export default CodefinityPage
