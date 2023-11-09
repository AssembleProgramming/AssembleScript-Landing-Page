import React, { useState } from 'react'
import './ForgotPassword.scss'
import AssembleNav from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import logo from "../../../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import SERVER_LINK from '../../../API';

const ForgotPassword = () => {
    const [teamEmail, setTeamEmail] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleForgotPasswordRequest = async (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        try {
            const response = await fetch(`${SERVER_LINK}/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    TEAM_MAIL: teamEmail,
                }),
            });

            if (response.ok) {
                toast.success('Password reset link has been sent to your E-mail.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
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
            setButtonDisabled(false);
        }
    }
    return (
        <>
            <AssembleNav />
            <div className="forgot-password-container">
                <div className="forgot-password-card">
                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: 'center',
                        margin: "20px 0"
                    }}>
                        <img
                            style={{
                                marginRight: '10px'
                            }}
                            width={30} src={logo} alt="logo" />
                        <h2>Forgot your password?</h2>
                    </div>
                    <p>Please enter your team email you used to sign up for Assemblescript.</p>
                    <form onSubmit={handleForgotPasswordRequest}>
                        <label>Team Email address</label>
                        <input
                            value={teamEmail}
                            onChange={(e) => setTeamEmail(e.target.value)}
                            type="email"
                            placeholder="name@domain.com"
                        />
                        <button disabled={isButtonDisabled} type="submit">Request Password Reset</button>
                    </form>
                    <p>Oops, I just remembered my password...<a href="/login-signup">Back to Login</a></p>
                </div>
            </div>
            <Footer />

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
        </>
    );
};

export default ForgotPassword;

