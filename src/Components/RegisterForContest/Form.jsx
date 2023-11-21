import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Form.scss'
import SERVER_LINK from '../../API';
import QR from "../../assets/images/payment-QR.webp"

const Form = ({ display, visibleForm, user }) => {
    const [leaderName, setLeaderName] = useState('');
    const [leaderMail, setLeaderMail] = useState('');
    const [leaderPhone, setLeaderPhone] = useState('');
    const [leaderLocation, setLeaderLocation] = useState('');

    const [paymentMethod, setPaymentMethod] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [favoriteAvenger, setFavoriteAvenger] = useState('');

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const navigate = useNavigate();

    const closeRegistrationForm = () => {
        document.body.classList.remove('modal-open');
        visibleForm(false);
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        // Disable the button when the registration process starts
        setButtonDisabled(true);
        const registrationData = {
            TEAM_MAIL: user[0].TEAM_MAIL,
            TEAM_ID: user[0]._id,

            LEADER_NAME: leaderName,
            LEADER_MAIL: leaderMail,
            LEADER_PHONE: leaderPhone,
            LEADER_LOCATION: leaderLocation,

            TRANSACTION_ID: transactionId,
            PAYMENT_METHOD: paymentMethod,

            FAV_AVENGER: favoriteAvenger.length ? favoriteAvenger : null,
        }

        try {
            const response = await fetch(`${SERVER_LINK}/contest-registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                toast.success('Congratulations Registration Successful!!!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });

                setInterval(() => {
                    window.location.reload();
                }, 2000);

            } else {
                const error = await response.json();
                if (error.message === "This user is already registered.") {
                    navigate(`/contest/main-contest`);
                }
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                })
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
        }
        finally {
            // Enable the button after API work is done (success or error)
            setButtonDisabled(false);
        }
    }
    return (
        <div>
            {display ? (
                <div id='model-out' className="contest-registration-form-container">
                    <div className="registration-form">
                        <div className="contest-name">
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                position: 'relative',
                                top: 0,
                                background: 'white',
                                padding: 20,
                                borderBottom: "1px solid #dadada",
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                            }}>
                                <h4
                                    style={{
                                        margin: 0,
                                        fontSize: 20
                                    }}
                                >AssembleScript's Codefinity Challenge
                                </h4>
                                <div>
                                    <i style={{
                                        fontSize: 22,
                                        cursor: 'pointer',
                                        color: '#999'
                                    }} className="fa-solid fa-xmark"
                                        onClick={closeRegistrationForm}
                                    >
                                    </i>
                                </div>
                            </div>
                        </div>
                        <p className='info-we-collect'>We use the information you provide to manage your account, identify you, and send you important updates. We may use your information to respond to your inquiries, provide customer support, and improve the application. <span>We will not share or sell your personal information</span> to third parties for marketing or advertising purposes.</p>
                        <form onSubmit={handleRegisterSubmit}>
                            {/* Leader fields */}

                            <div className='required-section'>
                                <div className='form-section-info'>
                                    <i style={{
                                        marginRight: 5
                                    }} class="fa-solid fa-circle-info" /> User Details:

                                    <p>It's crucial to provide accurate information. If any of the user's details are incorrect, it could lead to disqualification.</p>
                                </div>
                                <label htmlFor="leaderName">User Name <span className='required'>*</span>:</label>
                                <input
                                    type="text"
                                    id="leaderName"
                                    value={leaderName}
                                    placeholder="Enter your full name"
                                    required={true}
                                    onChange={(e) => setLeaderName(e.target.value)}
                                />

                                <label htmlFor="leaderMail">User Mail <span className='required'>*</span>:</label>
                                <input
                                    type="email"
                                    id="leaderMail"
                                    value={leaderMail}
                                    placeholder="Enter your email address"
                                    required={true}
                                    onChange={(e) => setLeaderMail(e.target.value)}
                                />

                                <label htmlFor="leaderPhone">User Phone No. <span className='required'>*</span>:</label>
                                <input
                                    type="tel"
                                    id="leaderPhone"
                                    value={leaderPhone}
                                    placeholder="Enter your phone number"
                                    required={true}
                                    onChange={(e) => setLeaderPhone(e.target.value)}
                                />


                                <label htmlFor="leaderLocation">User location<span className='required'>*</span>:</label>
                                <input
                                    type="text"
                                    id="leaderLocation"
                                    value={leaderLocation}
                                    placeholder="Enter your location"
                                    required={true}
                                    onChange={(e) => setLeaderLocation(e.target.value)}
                                />
                                <br />
                            </div>

                            {/* Payment method */}

                            <div className='form-section-info'>
                                <i style={{
                                    marginRight: 5
                                }} class="fa-solid fa-circle-info" />
                                Payment Method:

                                <p>The registration fee for the contest is <span style={{
                                    color: "red"
                                }}>INR 20/-</span> and payment is mandatory with no refunds. We will not be responsible if you pay and don't attend the contest. Only Google Pay or Phone Pay are acceptable payment methods. Using any other payment method will result in disqualification. Provide correct transaction ID as all IDs will be verified. Any incorrect IDs will also lead to disqualification.</p>
                            </div>

                            <label htmlFor="paymentMethod">Select Payment Method <span className='required'>*</span>:</label>
                            <select
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required={true}
                            >
                                <option value="" disabled>--Select--</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="Phone Pay">Phone Pay</option>
                            </select>

                            <label> Payment QR Code:</label>
                            <div className="payment" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img width={"50%"} src={QR} alt="QR-Code" />
                            </div>

                            <label htmlFor='transactionId'>Transaction Id <span className='required'>*</span>:</label>
                            <input
                                type="text"
                                id="transactionId"
                                value={transactionId}
                                placeholder="Enter transaction ID"
                                required={true}
                                onChange={(e) => setTransactionId(e.target.value)}
                            />

                            {/* Favorite Avenger */}
                            <label htmlFor="favoriteAvenger">Favorite Avenger:</label>
                            <input
                                type="text"
                                id="favoriteAvenger"
                                value={favoriteAvenger}
                                placeholder="Enter the name of your favorite marvel character"
                                onChange={(e) => setFavoriteAvenger(e.target.value)}
                            />

                            {/* Submit button */}
                            <button type="submit" disabled={isButtonDisabled}>Submit</button>
                        </form>
                    </div>
                </div>
            ) : (
                <></>
            )}

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
        </div>
    );
}

export default Form;