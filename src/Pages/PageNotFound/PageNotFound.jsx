import React from 'react'
import './PageNotFound.scss'
import { Link } from 'react-router-dom'
import deadpool from '../../assets/images/contest-not-started.webp'
import AssembleNav from '../../Components/Navbar/Navbar'

const PageNotFound = () => {
    return (
        <div>
            <AssembleNav />
            <div className='page-notfound-container'>
                <div className="page-notfound-container-inner">
                    <div className="page-notfound-container-inner-top">
                        <h1>404!</h1>
                        <h3>Page Not Found!</h3>
                        <p className='description'>Uh-oh! It seems Thanos snapped our page out of existence. The Avengers are on it, but in the meantime, try a different path. We're working on restoring balance to the web universe. Excelsior!
                            <br />
                            Please try visiting after <a href="/login-signup">Login-in.</a>
                        </p>
                        <p>Here are some useful links instead:</p>
                        <div className='buttons'>
                            <Link to="/playground">
                                <button className='pnf-btn'>Playground</button>
                            </Link>
                            <Link to="/">
                                <button className='pnf-btn'>Home</button>
                            </Link>
                            <Link to="/docs/latest">
                                <button className='pnf-btn'>Documentation</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
