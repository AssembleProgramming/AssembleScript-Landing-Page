import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Stats } from '@react-three/drei'
import Shield from '../../Components/Shield'
import Button from 'react-bootstrap/Button';
import './Home.scss'
import RepoStats from '../../Components/GitStats/CurrentStats'
import { Perf } from 'r3f-perf'
import AssembleNav from '../../Components/Navbar/Navbar'

const Home = () => {
    return (
        <>
            <section className='section1' style={{ height: "100vh" }}>
                <AssembleNav/>
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
                    <Stats />
                    <Perf position="bottom-left"/>
                </Canvas>
                <div className="mainPageContainer">
                    <div className="left">
                        <h1 className='main-title'>
                            Unleash Your Inner
                            Avenger with
                            AssembleScript
                        </h1>
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
                                <i className="fa-solid fa-code"></i> Get Started
                            </Button>
                            <Button className='main-btn' variant="dark" size="lg">
                                <i className="fa-brands fa-github"></i> Source Code
                            </Button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="version">
                            <h6 className='version-title'>Latest Version</h6>
                            <hr />
                            <i class="fa-brands fa-github"></i> <span>v1.0.0 on 5 Jul</span>
                        </div>
                        <div className="version">
                            <h6 className='version-title'>Upcoming Version</h6>
                            <hr />
                            <i class="fa-brands fa-github"></i> <span>v1.1.0 on 30 Jul</span>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: "#fff", height: "0vh" }}></section>
        </>
    )
}

export default Home