import React, { useState, useEffect } from 'react';
import './ContestRegister.scss';
import { startTime, endTime } from '../../Pages/Contest/StartTime';
import { Link } from 'react-router-dom';

const calculateTimeRemaining = (targetTime) => {
    const now = new Date().getTime();
    const target = new Date(targetTime).getTime();
    return target > now ? target - now : 0;
};

const ContestRegister = ({ user }) => {
    const [timeRemainingToStart, setTimeRemainingToStart] = useState(calculateTimeRemaining(startTime));
    const [timeRemainingToEnd, setTimeRemainingToEnd] =  useState(calculateTimeRemaining(endTime));

    useEffect(() => {
        const timer = setInterval(() => {
            // Update time remaining every second
            setTimeRemainingToStart(calculateTimeRemaining(startTime));
            setTimeRemainingToEnd(calculateTimeRemaining(endTime));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const renderContent = () => {
        if (user.length) {
            if (timeRemainingToStart) {
                return (
                    <div className='user-register'>
                        <h6>▶️ Register to participate in contest:</h6>
                        <div>
                            <button className='register-btn'>Register</button>
                            <Link to="/contest/frequently-asked-questions">
                                <button className='FAQ-btn'>FAQ about Contest</button>
                            </Link>
                        </div>
                    </div>
                );
            } else if (timeRemainingToEnd) {
                return (
                    <div className='contest-start'>
                        <h6>▶️ Start Contest:</h6>
                        <div>
                            <button className='start-btn'>Start</button>
                            <Link to="/contest/frequently-asked-questions">
                                <button className='FAQ-btn'>FAQ about Contest</button>
                            </Link>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className='contest-ends'>
                        <h6>▶️ Contest has Ended, check your standing:</h6>
                        <div>
                            <button className='ranking-btn'>Ranking</button>
                            <Link to="/contest/frequently-asked-questions">
                                <button className='FAQ-btn'>FAQ about Contest</button>
                            </Link>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className='no-user-register'>
                    <Link to="/login-signup">
                        <a>
                            To register for the contest, you must be logged in!!!
                        </a>
                    </Link>
                    <Link to="/contest/frequently-asked-questions">
                        <button className='FAQ-btn'>FAQ about Contest</button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default ContestRegister;
