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
import MainContest from "../../assets/images/main-contest.avif"
import practice from "../../assets/images/practice.jpg"

const startTime = new Date(2023, 10, 10, 14, 30, 0);
const calculateTimeRemaining = (startTime) => {
    const now = new Date().getTime();
    const start = new Date(startTime).getTime();
    const difference = start - now;

    if (difference <= 0) {
        // Contest has started, return a message or handle it as needed
        return 'Contest Started';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
const Contest = () => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(startTime));
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
                                <h2>Final Contest</h2>
                                <p>Starts in: {timeRemaining}</p>
                                <p>Day and Time: Sunday, 8:00 am</p>
                            </div>
                            <div className="buttons">
                                <button>Register</button>
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
