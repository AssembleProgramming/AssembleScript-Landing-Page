import React from "react";
import "./Logininfo.scss";
import { Link } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

const Logininfo = ({ user }) => {
  return (
    <div className="user-login-status-card">
      {user.length ? (
        <UserCard user={user} />
      ) : (
        <>
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
          <div className="no-login">
            <div>
              <h3>no user logged in</h3>
              <p>login to register for contest!</p>
            </div>
            <Link to="/login-signup">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Logininfo;
