import React, { useState } from 'react';
import './LoginSignUpBody.scss';
import data from './TermsOfService';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../assets/logo.png"

const LoginSignUpBody = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisiblePolicy, setIsVisiblePolicy] = useState(false);
  const [teamEmail, setTeamEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegisterButtonDisabled, setRegisterButtonDisabled] = useState(false);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };


  const handleRegistration = async (e) => {
    e.preventDefault();
    // Disable the button when the registration process starts
    setRegisterButtonDisabled(true);


    if (password !== confirmPassword) {
      toast.error('Password and Confirmation Password do not match.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response = await fetch("https://codefinity-api.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TEAM_NAME: teamName,
          TEAM_MAIL: teamEmail,
          PASSWORD: password,
        }),
      });

      if (response.ok) {
        toast.success('Registration Successful!!!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
        setIsLogin(!isLogin);
      } else {
        const error = await response.json();
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      toast.error('An error occurred. Please try again later.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    }
    finally {
      // Enable the button after API work is done (success or error)
      setRegisterButtonDisabled(false);
    }
  }


  return (
    <div className="login-signup-body">
      {isLogin ? (
        <div className="login-section">
          <div>
            <img width={50} src={logo} alt="logo" />
            <h2>Log in to AssembleScript</h2>
          </div>
          <form>
            <label>Team Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              value={teamEmail}
              onChange={(e) => setTeamEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit' className='primary-button sign-in-button'>Log-In with Email</button>
          </form>
          <p>
            Don't have an account? {' '}
            <span onClick={toggleLoginRegister}>Register</span>.
          </p>
        </div>
      ) : (
        <div className="register-section">
          {
            isVisiblePolicy &&
            (
              <div className='policy' >
                <div className="policy-content card">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    background: 'white',
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid #dadada"
                  }}>
                    <h4
                      style={{
                        margin: 0
                      }}
                    >Terms of Service and Privacy Policy</h4>
                    <div>
                      <i style={{
                        fontSize: 22,
                        cursor: 'pointer',
                        color: 'black'
                      }} className="fa-solid fa-xmark"
                        onClick={() => setIsVisiblePolicy(!isVisiblePolicy)}
                      >
                      </i>
                    </div>
                  </div>
                  <p>
                    By using the AssembleScript application, you agree to comply with and be bound by these Terms of Service. If you do not agree to these Terms, please do not use the application.
                  </p>
                  {
                    data.map((item, idx) => (
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: 'column'
                      }} key={idx}>
                        <h6 style={{
                          color: '#7444ff',
                          margin: 0,
                          display: "flex",
                          alignItems: "center",
                          fontSize: 18,
                        }}>
                          <span
                            className='wrapper'
                            style={{ color: "#7444ff" }}
                            dangerouslySetInnerHTML={{ __html: item.icon }} />
                          &nbsp;
                          {item.title}:
                        </h6>
                        <p style={{
                          marginTop: 3,
                          color: 'black'
                        }}>{item.info}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
          <div>
            <img width={50} src={logo} alt="logo" />
            <h2>Register to AssembleScript</h2>
          </div>

          <form onSubmit={handleRegistration}>
            <label>Team Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              required
              value={teamEmail}
              onChange={(e) => setTeamEmail(e.target.value)}
            />

            <label>Team Name (Unique)*</label>
            <input
              type="text"
              placeholder="Enter a unique name for your team"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create a new password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter to confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop: 10 }}>
              <input className='check-box' type='checkbox' required={true} />
              <label className='check-box-label'>
                By signing up, I agree to &nbsp;
                <span
                  style={{
                    textDecoration: 'underline',
                    color: 'rgb(3, 99, 226)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsVisiblePolicy(!isVisiblePolicy)}>Terms of Use and Privacy Policy.</span>
              </label>
            </div>
            <button type='submit' className='primary-button register-in-button' disabled={isRegisterButtonDisabled} >Register with Email</button>
          </form>
          <p>
            Already have an account?{' '}
            <span onClick={toggleLoginRegister}>Log in</span>.
          </p>
        </div>
      )
      }

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        theme="light"
      />
    </div >
  );
};

export default LoginSignUpBody;
