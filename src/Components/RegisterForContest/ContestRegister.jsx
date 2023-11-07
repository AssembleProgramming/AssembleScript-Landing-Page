import React, { useState, useEffect } from 'react'
import './ContestRegister.scss'
import startTime from '../../Pages/Contest/StartTime'
import { Link } from 'react-router-dom';

const calculateTimeRemaining = (startTime) => {
    const now = new Date().getTime();
    const start = new Date(startTime).getTime();
    const difference = start - now;

    if (difference <= 0) {
        // Contest has started, return a message or handle it as needed
        return 0;
    }

    return 1;
};

const ContestRegister = ({ user }) => {
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
            {
                user.length
                    ?
                    timeRemaining
                        ?
                        <div className='user-register'>
                            <h6>📝 Register to participate in contest:</h6>
                            <div>
                                <button className='register-btn'>Register</button>
                                <Link to="/contest/frequently-asked-questions">
                                    <button className='FAQ-btn'>FAQ about Contest</button>
                                </Link>
                            </div>

                        </div>
                        :
                        <div className='contest-start'>
                            <h6>▶️ Start Contest contest:</h6>
                            <div>
                                <button className='start-btn'>Start</button>
                                <Link to="/contest/frequently-asked-questions">
                                    <button className='FAQ-btn'>FAQ about Contest</button>
                                </Link>
                            </div>
                        </div>
                    :
                    <div className='no-user-register'>
                        <a href="">
                            To register for the contest, you must be logged in!!!
                        </a>
                        <Link to="/contest/frequently-asked-questions">
                            <button className='FAQ-btn'>FAQ about Contest</button>
                        </Link>
                    </div>

            }
        </div >
    )
}

export default ContestRegister