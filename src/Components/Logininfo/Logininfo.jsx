import React from "react";
import "./Logininfo.scss";

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
            <h3>
              logged in as: <span>{user.teamName}</span>
            </h3>
            <h3>
              leader: <span>{user.leaderName}</span>
            </h3>
            <h3>
              member: <span>{user.memberName}</span>
            </h3>
            <button id="logout-btn">Logout</button>
          </div>
        ))
      ) : (
        <div className="no-login">
          <div>
            <h3>no user logged in</h3>
            <p>login to register for contest!</p>
          </div>
          <button className="login-btn">Login</button>
        </div>
      )}
    </div>
  );
};

export default Logininfo;
