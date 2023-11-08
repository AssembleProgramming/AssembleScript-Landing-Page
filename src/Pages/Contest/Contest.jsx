import React, { useState, useEffect } from 'react'
import './Contest.scss'
import AssembleNav from '../../Components/Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import one from "../../assets/images/Cone.webp"
import two from "../../assets/images/Ctwo.webp"
import three from "../../assets/images/Cthree.webp"
import four from "../../assets/images/Cfour.webp"
import five from "../../assets/images/Cfive.webp"
import Footer from '../../Components/Footer/Footer';
import MainContest from "../../assets/images/main-contest.jpg"
import practice from "../../assets/images/practice.png"
import { Link } from 'react-router-dom';
import { startTime, endTime } from './StartTime';

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

const Contest = () => {
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
            <div className="contest-head">
                <div className='contest-title'>
                    <h1>AssembleScript Contest</h1>
                    <p>Compete and earn your reward !!!</p>
                </div>
                <Carousel interval={5000} wrap={true} slide={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={one}
                            alt="First slide"
                        />
                        <Carousel.Caption className='contest-carousel-about'>
                            <h3>With great power comes great responsibility</h3>
                            <p>Spider-Man's web dissolves within an hour and yet is strong enough to hold The Hulk.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={two}
                            alt="sec=slide"
                        />
                        <Carousel.Caption className='contest-carousel-about'>
                            <h3>I can do this all day.</h3>
                            <p>
                                Steve Roger's body has the upper-most limits of human perfection in strength, stamina, agility, and durability.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={three}
                            alt="sec=slide"
                        />
                        <Carousel.Caption className='contest-carousel-about'>
                            <h3>I dress up as an obscure moon-god and strike fear in the hearts of men</h3>
                            <p>
                                We Don't Know How Many Personalities Moon Knight Has.
                            </p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={four}
                            alt="sec=slide"
                        />
                        <Carousel.Caption className='contest-carousel-about'>
                            <h3>I've got red in my ledger. I'd like to wipe it out.</h3>
                            <p>
                                She is skilled in many forms of martial arts including aikido, judo, karate, savate, and boxing
                            </p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={five}
                            alt="sec=slide"
                        />
                        <Carousel.Caption className='contest-carousel-about'>
                            <h3>Avengers Assemble !!!</h3>
                            <p>
                                The Avengers have been around a long time and they've proven to be very unique
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="main-contest-cards">
                <h3>Participate</h3>

                <div className="contest-cards">
                    <div className="main-contest">
                        <div className="contest-card">
                            <div className="contest-image">
                                <img src={MainContest} alt="img" />
                            </div>
                            <div className="contest-details">
                                <h2>Codefinity Challenge</h2>
                                <p>
                                    {currentTime < startTime ? (
                                        <span>Starts In: <b style={{ fontWeight: 600 }}>{timeRemaining}</b></span>
                                    ) : currentTime < endTime ? (
                                        <span>Ends in: <b style={{ fontWeight: 600 }}>{timeRemaining}</b></span>
                                    ) : (
                                        <span><b style={{ fontWeight: 600 }}>The Contest has ended</b></span>
                                    )}
                                </p>
                                <p>Date: <b style={{ fontWeight: 600 }}>24th Nov 2023, 4:30 P.M.</b></p>
                            </div>
                            <div className="buttons">
                                <Link to="/contest/main-contest">
                                    <button href="/contest/main-contest">Enter</button>
                                </Link>
                                <button id='ranking-btn'>Ranking</button>
                            </div>
                        </div>
                    </div>
                    <div className="practice-contest">
                        <div className="contest-card">
                            <div className="contest-image">
                                <img width={"100%"} height={"100%"} src={practice} alt="img" />
                            </div>
                            <div className="contest-details">
                                <h2>Practice Contest</h2>
                                <p>The practice contest is only to get familiarize with the platform</p>
                            </div>
                            <div className="buttons">
                                <button>Practice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contest
