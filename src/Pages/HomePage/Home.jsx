import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stats } from '@react-three/drei'
import Shield from '../../Components/Shield'
import Button from 'react-bootstrap/Button';
import RepoStats from '../../Components/GitStats/CurrentStats'
import { Perf } from 'r3f-perf'
import AssembleNav from '../../Components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import './Home.scss'
import BlackPanther from '../../Components/BlackPanther';
import Loader from '../Loader/Loader';
import Footer from '../../Components/Footer/Footer';
import CodeExampleSection from '../../Components/CodeExample/CodeExample';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
    const [title, setTitle] = useState();
    const fullText = "Unleash Your Inner Avenger with AssembleScript";
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(interval);
                return;
            }
            setTitle(fullText.substring(0, currentIndex + 1));
            currentIndex += 1;
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className='section1'>
                    <AssembleNav />
                    <Canvas
                        className='webgl'
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [- 4, 3, 6],
                        }}
                    >
                        <color attach="background" args={['#fff']} />
                        <Environment files="./maps/brown_photostudio_1k.hdr" background={false} blur={0} />
                        <Shield />
                        {/* <Stats /> */}
                        {/* <Perf position="bottom-left" /> */}
                    </Canvas>
                    <div className="mainPageContainer">
                        <div className="left">
                            <div className='home-title-container'>
                                <h1 className='main-title'>
                                    {title && title.split(' ').map((word, index) => {
                                        if (word === 'AssembleScript') {
                                            return <span key={index} className="assemble-script">{word}</span>;
                                        }
                                        return word + ' ';
                                    })}
                                </h1>
                            </div>
                            <p className='main-info'>
                                Inspired by the epic world of Marvel and the incredible Avengers, <br />
                                AssembleScript combines the best of  programming with <br /> the thrill of superheroic adventures.
                                It's time to step into the spotlight and become the hero your code deserves.
                            </p>
                            <div className="stats">
                                <RepoStats />
                            </div>
                            <div className='main-btn-container'>
                                <Button className='main-btn' variant="light" size="lg">
                                <Nav.Link href="/playground"><i className="fa-solid fa-code"></i> Get Started</Nav.Link> 
                                </Button>
                                <Button target='_blank' href='https://github.com/AssembleProgramming/AssembleScript' className='main-btn' variant="dark" size="lg">
                                    <i className="fa-brands fa-github"></i> Source Code
                                </Button>
                            </div>
                        </div>
                        <div className="right">
                            <div className="version">
                                <h6 className='version-title'>Latest Version</h6>
                                <hr />
                                <i className="fa-brands fa-github"></i> <span>v1.0.0 on 5 Jul</span>
                            </div>
                            <div className="version">
                                <h6 className='version-title'>Upcoming Version</h6>
                                <hr />
                                <i className="fa-brands fa-github"></i> <span>v1.1.0 on 30 Jul</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='section2' style={{ background: "#fff" }}>
                    <div className='canvas-container'>
                        <Canvas
                            className='webgl'
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [- 4, 3, 6],
                            }}
                        >
                            <color attach="background" args={['#fff']} />
                            <Environment files="./maps/studio_small_01_1k.hdr" background={false} blur={0} />
                            <BlackPanther />
                            {/* <Stats />
                            <Perf position="bottom-left" /> */}
                        </Canvas>
                    </div>
                    <div className="section2Container">
                        <h1 className='section2-title'>The Power of AssembleScript</h1>
                        <p className='key-info'> AssembleScript is a programming language for Avengers.
                            With its unique syntax and powerful capabilities, AssembleScript empowers
                            you to create heroic scripts.
                            Explore the exciting features below and witness the true potential of your programming.
                        </p>
                        <div className="features">
                            <div className="feat">
                                <h3 className="feat-title">Avengers-Specific Syntax</h3>
                                <p className="feat-into">Write code that resonates with the spirit of your favorite Avengers, making programming an adventure in itself.</p>
                                <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="feat">
                                <h3 className="feat-title">Powerful Scripting Capabilities</h3>
                                <p className="feat-into">AssembleScript empowers you to create scripts with incredible power and versatility.</p>
                                <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="feat">
                                <h3 className="feat-title">Continuous Updates and Support</h3>
                                <p className="feat-into">Our dedicated team of developers is committed to the ongoing improvement of AssembleScript. Expect regular updates, bug fixes, and comprehensive documentation to support your programming journey.</p>
                                <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section3'>
                    <h3 className='section3-title'>Example Code written in AssembleScript</h3>
                    <p className="section3-info">This code snippet demonstrates a simple algorithm for checking prime numbers in AssembleScript by iterating over the array nums and applying the logic to each element.</p>
                    <CodeExampleSection />
                </section>
                <Footer />
            </Suspense >
        </>
    )
}

export default Home