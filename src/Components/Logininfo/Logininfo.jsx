import React from "react";
import "./Logininfo.scss";
import { Link } from "react-router-dom";

const Logininfo = ({ user }) => {
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
            <h3> Your Team Name: </h3> <h1>{user.TEAM_NAME}</h1>
            <p>{user.Registered ? <p style={{ color: "green" }}>Registered For Contest</p> : <p style={{ color: "red" }}>Not Registered For Contest</p>}</p>
            <button id="logout-btn">Logout</button>
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
