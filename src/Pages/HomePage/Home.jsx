import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Shield from '../../Components/AllGLBS/Shield';
import Button from 'react-bootstrap/Button';
import RepoStats from '../../Components/GitStats/CurrentStats'
import AssembleNav from '../../Components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import './Home.scss'
import Footer from '../../Components/Footer/Footer';
import CodeExampleSection from '../../Components/CodeExample/CodeExample';
import Nav from 'react-bootstrap/Nav';
import { Experience } from "../../Components/AllGLBS/Experience"
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import gauntlet from "../../assets/gauntlet.png"
import hoverSound from "./snap.mp3"
import transform from "./transform.mp3"
import { TypeAnimation } from 'react-type-animation';
import MyLoader from '../Loader/Loader';
import MyLoader2 from '../Loader/Loader2';
import PopupModal from '../../Components/Contest-PopUp-Modal/PopupModal';

const Home = () => {
    const [latestVersion, setLatestVersion] = useState("");
    const experienceRef = useRef();
    const handleSnapClick = () => {
        // Step 4: Call the function from the <Experience /> component using the ref
        if (experienceRef.current) {
            experienceRef.current.snapHandler();
            const audio = new Audio(transform);
            audio.play();
        }
    };

    const playHoverSound = () => {
        // Create an audio element and play the sound on hover
        const audio = new Audio(hoverSound);
        audio.play();
    };

    useEffect(() => {
        fetchLatestVersion();
    }, [])
    const fetchLatestVersion = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/AssembleProgramming/AssembleScript/releases/latest', {
                headers: {
                    Authorization: 'Bearer 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',
                },
            });
            const data = await response.json();
            setLatestVersion({
                version: data.tag_name,
                releaseDate: new Date(data.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
            });
        } catch (error) {
            console.log('Error fetching latest version:', error);
            setLatestVersion({ version: 'N/A', releaseDate: 'N/A' });
        }
    };
    return (
        <>
            <div>
                <PopupModal />
                <section className='section1'>
                    <AssembleNav />
                    <Suspense fallback={<MyLoader />}>
                        <Canvas
                            className='webgl'
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [- 4, 3, 6],
                            }}
                        >
                            <color args={['#fff']} />
                            <Environment files="./maps/brown_photostudio_1k.hdr" background={false} blur={0} />
                            <Shield />
                        </Canvas>
                    </Suspense>
                    <div className="mainPageContainer">
                        <div className="left">
                            <div className='home-title-container'>
                                <h1 className='main-title'>
                                    With&nbsp;
                                    <br id='line-break' />
                                    <span className="assemble-script">
                                        AssembleScript
                                    </span>
                                    <br />
                                    <TypeAnimation
                                        sequence={[
                                            `Unleash Your Inner Developer`,
                                            1500,
                                            `Unleash Your Inner Avenger...`,
                                            1500,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                    // style={{ display: 'inline-block' }}
                                    />
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
                                <i className="fa-brands fa-github"></i> <span>{latestVersion.version ? latestVersion.version : "Loading....."} {latestVersion.releaseDate}</span>
                            </div>
                            <div className="version">
                                <h6 className='version-title'>Upcoming Version</h6>
                                <hr />
                                <i className="fa-brands fa-github"></i> <span>v3.0.0 on 30 Sept 2024</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='section2'>
                    <div className='canvas-container'>
                        <Suspense fallback={<MyLoader2 />}>
                            <Canvas shadows camera={{ position: [3, 3, 7], fov: 42 }}>
                                <color attach="background" args={["#fff"]} />
                                <Experience ref={experienceRef} />
                                <EffectComposer>
                                    <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
                                </EffectComposer>
                            </Canvas>
                            <div id='snap-button' onMouseEnter={playHoverSound} onClick={handleSnapClick}>
                                <img src={gauntlet} alt="img" />
                                <span>Snap !</span>
                            </div>
                        </Suspense>
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
                                <p className="feat-into">Write code that resonates with the spirit of your favorite Avengers, making the process of programming a thrilling adventure. AssembleScript allows you to express your creativity and passion while developing your scripts.</p>
                                {/* <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a> */}
                            </div>
                            <div className="feat">
                                <h3 className="feat-title">Powerful Scripting Capabilities</h3>
                                <p className="feat-into">AssembleScript empowers you to create scripts with incredible power and versatility. By harnessing the power and versatility of AssembleScript, you can build sophisticated scripts and applications to solve complex problems.</p>
                                {/* <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a> */}
                            </div>
                            <div className="feat">
                                <h3 className="feat-title">Continuous Updates and Support</h3>
                                <p className="feat-into">Our dedicated team of developers is committed to the ongoing improvement of AssembleScript. Expect regular updates, bug fixes, and comprehensive documentation to support your programming journey.</p>
                                {/* <a className='learnmore' target='_blank' href="#">Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a> */}
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
            </div>
        </>
    )
}

export default Home