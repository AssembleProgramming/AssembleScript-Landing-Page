import React, { useState } from 'react';
import './LoginSignUpBody.scss';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import SERVER_LINK from '../../API';

const LoginSignUpBody = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [teamEmail, setTeamEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    // Disable the button when the registration process starts
    setButtonDisabled(true);

    if (password !== confirmPassword) {
      toast.error('Password and Confirmation Password do not match.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      setButtonDisabled(false); // Enable the button after displaying the error
      return;
    }

    const TEAM_GRP_NO = Math.floor(Math.random() * 6);

    try {
      const response = await fetch(`${SERVER_LINK}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TEAM_NAME: teamName,
          TEAM_MAIL: teamEmail,
          PASSWORD: password,
          TEAM_GRP_NO: TEAM_GRP_NO
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
      console.error("Error:", error);
      toast.error('A network error occurred. Please try again later.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      // Enable the button after API work is done (success or error)
      setButtonDisabled(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Disable the button when the login process starts
    setButtonDisabled(true);

    try {
      const response = await fetch(`${SERVER_LINK}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TEAM_MAIL: teamEmail,
          PASSWORD: password,
        }),
      });

      if (response.ok) {
        toast.success('Login Successful!!!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });

        const data = await response.json();
        // Perform the login logic and if successful, navigate to the main contest route
        onLogin(data.team);
        navigate(`/contest/main-contest`);
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
      console.error("Error:", error);
      toast.error('A network error occurred. Please try again later.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      // Enable the button after API work is done (success or error)
      setButtonDisabled(false);
    }
  }

  return (
    <div className="login-signup-body">
      {isLogin ? (
        <div className="login-section">
          <div>
            <img width={50} src={logo} alt="logo" />
            <h2>Log In to AssembleScript</h2>
          </div>
          <form onSubmit={handleLogin}>
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: "center",
              fontSize: "13px !important"
            }}>
              <p style={{
                margin: 8,
                textAlign: 'left',
              }}>
                You will be signed in for 30days.
              </p>
              <Link to={"/forgot-password"}>
                <p
                  style={{
                    margin: 8,
                    color: "rgb(0, 110, 255)",
                    textDecoration: "underline",
                    cursor: "pointer",
                    textAlign: "right"
                  }}>
                  Forgot password?
                </p>
              </Link>
            </div>


            <button type='submit' className='primary-button sign-in-button' disabled={isButtonDisabled}>Log-In with Email</button>
          </form>
          <p>
            Don't have an account? {' '}
            <span onClick={toggleLoginRegister}>Sign-Up</span>.
          </p>
        </div>
      ) : (
        <div className="register-section">
          <div>
            <img width={50} src={logo} alt="logo" />
            <h2>Sign Up to AssembleScript</h2>
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
              maxLength={14}
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
                > <a target='_blank' href="/terms-of-service">Terms of Use and Privacy Policy</a>.</span>
              </label>
            </div>
            <button type='submit' className='primary-button register-in-button' disabled={isButtonDisabled} >SignUp with Email</button>
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
