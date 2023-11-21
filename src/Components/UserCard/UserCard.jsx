import React from 'react';
import './UserCard.scss'; // Make sure to adjust the path based on your project structure
import logo from "../../assets/logo.png"
import Cookies from "universal-cookie";
import power from "../../assets/images/1.png";
import reality from "../../assets/images/2.png";
import mind from "../../assets/images/3.png";
import soul from "../../assets/images/4.png";
import space from "../../assets/images/5.png";
import time from "../../assets/images/6.png";
const cookies = new Cookies();


const stoneBasedBG_Color = [
    "linear-gradient(2deg, #600b83 0%, #722ae6 74%)", // power
    "linear-gradient(0deg, #660000 0%, #ff0033 90%)", // reality
    "linear-gradient(10deg, #976700 0%, #ffc800 100%)", // mind
    "linear-gradient(10deg, #8d2504 0%, #FF9800 100%)", // soul
    "linear-gradient(10deg, #26316f 0%, #00bdd6 100%)", // space
    "linear-gradient(0deg, #004c4c 0%, #289b28 90%)", // time
]

const stone_img = [
    power,
    reality,
    mind,
    soul,
    space,
    time
]

const UserCard = ({ user }) => {
    // Function to log the user out
    const handleLogout = () => {
        console.log('hi')
        // Remove the JWT token cookie
        cookies.remove('access_token', { path: '/' });

        // Optionally, you can redirect to a logout page or the home page
        window.location.href = '/contest/main-contest'; // Redirect to the home page
    };

    const TEAM_GRP_NO = user[0].TEAM_GRP_NO;

    const userInfoBgStyle = {
        background: stoneBasedBG_Color[TEAM_GRP_NO]
    }


    return (
        user.map((user, id) => (
            <div style={userInfoBgStyle} key={id} className="userinfo-card">
                <div className="main">
                    <img
                        className="tokenImage"
                        src={stone_img[TEAM_GRP_NO]}
                        alt="stone"
                    />
                    <p>User Name:</p>
                    <h2>{user.TEAM_NAME} #{user.TEAM_NUMBER}</h2>
                    <p className="description">
                        {
                            user.Registered ?
                                <span style={{  textAlign: 'center' }}>
                                    Status: Registered
                                </span> :
                                <span style={{ color: "#fff", textAlign: 'center', fontSize: 15 }}>
                                    Status: Un-Registered
                                </span>
                        }
                    </p>

                    <button onClick={handleLogout} id="logout-btn">Logout</button>

                    <div className="creator">
                        <div className="wrapper">
                            <img
                                src={logo}
                                alt="Creator"
                            />
                        </div>
                        <p>
                            <ins>Codefinity</ins> @AssembleScript
                        </p>
                    </div>
                </div>
            </div>
        ))
    );
};

export default UserCard;
