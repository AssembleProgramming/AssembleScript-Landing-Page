import React from "react";
import "./Logininfo.scss";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Logininfo = ({ user }) => {

  // Function to log the user out
  const handleLogout = () => {
    // Remove the JWT token cookie
    cookies.remove('access_token', { path: '/' });

    // Optionally, you can redirect to a logout page or the home page
    window.location.href = '/contest/main-contest'; // Redirect to the home page
  };

  return (
    <div className="user-login-status-card">
      <div
        style={{
          color: "#333",
          background: "rgb(75 50 195 / 14%)",
          borderColor: "#ddd",
          width: "100%",
          padding: "10px 15px",
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
        }}
      >
        Login Status
      </div>
      {user.length ? (
        user.map((user, id) => (
          <div key={id} className="login">
            <div style={{textAlign: "center"}}>
              <h6> Your Team Name: </h6> <h3>{user.TEAM_NAME}</h3>
            </div>

            <p>{user.Registered ? <p style={{ color: "green", textAlign: 'center' }}>Your team is registered for contest. All the best !!!</p> : <p style={{ color: "red",textAlign: 'center', fontSize: 14 }}>Your team is not registered for contest. Register as soon as possible</p>}</p>
            <button onClick={handleLogout} id="logout-btn">Logout</button>
          </div>
        ))
      ) : (
        <div className="no-login">
          <div>
            <h3>no user logged in</h3>
            <p>login to register for contest!</p>
          </div>
          <Link to="/login-signup">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logininfo;
