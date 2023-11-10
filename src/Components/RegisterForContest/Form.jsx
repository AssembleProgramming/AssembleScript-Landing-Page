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
    const [leaderYear, setLeaderYear] = useState('');
    const [leaderDepartment, setLeaderDepartment] = useState('');
    const [leaderDiv, setLeaderDiv] = useState('');
    const [leaderRollNo, setLeaderRollNo] = useState('');
    const [showMemberForm, setShowMemberForm] = useState(false);
    const [memberName, setMemberName] = useState('');
    const [memberMail, setMemberMail] = useState('');
    const [memberPhone, setMemberPhone] = useState('');
    const [memberYear, setMemberYear] = useState('');
    const [memberDepartment, setMemberDepartment] = useState('');
    const [memberDiv, setMemberDiv] = useState('');
    const [memberRollNo, setMemberRollNo] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [favoriteAvenger, setFavoriteAvenger] = useState('');

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const navigate = useNavigate();

    const closeRegistrationForm = () => {
        document.body.classList.remove('modal-open');
        visibleForm(false);
    }
    const addMember = () => {
        setShowMemberForm(true);
    };

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
            LEADER_YEAR: leaderYear,
            LEADER_DEPT: leaderDepartment,
            LEADER_DIV: leaderDiv,
            LEADER_RNO: leaderRollNo,

            MEMBER_NAME: memberName.length ? memberName : null,
            MEMBER_MAIL: memberMail.length ? memberMail : null,
            MEMBER_PHONE: memberPhone.length ? memberPhone : null,
            MEMBER_YEAR: memberYear.length ? memberYear : null,
            MEMBER_DEPT: memberDepartment.length ? memberDepartment : null,
            MEMBER_DIV: memberDiv.length ? memberDiv : null,
            MEMBER_RNO: memberRollNo.length ? memberRollNo : null,

            TRANSACTION_ID: transactionId,
            PAYMENT_METHOD: paymentMethod,

            FAV_AVENGER: favoriteAvenger.length ? favoriteAvenger : null,
        }

        console.log(registrationData);
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
                if (error.message === "This team is already registered.") {
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
                                    }} class="fa-solid fa-circle-info" /> Team Details:

                                    <p>It's crucial to provide accurate information. If any of the team's details are incorrect, it could lead to disqualification.</p>
                                </div>
                                <label htmlFor="leaderName">Leader Name <span className='required'>*</span>:</label>
                                <input
                                    type="text"
                                    id="leaderName"
                                    value={leaderName}
                                    placeholder="Enter team leader's full name"
                                    required={true}
                                    onChange={(e) => setLeaderName(e.target.value)}
                                />

                                <label htmlFor="leaderMail">Leader Mail <span className='required'>*</span>:</label>
                                <input
                                    type="email"
                                    id="leaderMail"
                                    value={leaderMail}
                                    placeholder="Enter team leader's email address"
                                    required={true}
                                    onChange={(e) => setLeaderMail(e.target.value)}
                                />

                                <label htmlFor="leaderPhone">Leader Phone No. <span className='required'>*</span>:</label>
                                <input
                                    type="tel"
                                    id="leaderPhone"
                                    value={leaderPhone}
                                    placeholder="Enter team leader's phone number"
                                    required={true}
                                    onChange={(e) => setLeaderPhone(e.target.value)}
                                />

                                <label htmlFor="leaderYear">Leader's Current Studying Year <span className='required'>*</span>:</label>
                                <select
                                    id="leaderYear"
                                    value={leaderYear}
                                    onChange={(e) => setLeaderYear(e.target.value)}
                                    required={true}
                                >
                                    <option value="" disabled>--Select--</option>
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Final Year">Final Year</option>
                                </select>

                                <label htmlFor="leaderDepartment">Leader's Department <span className='required'>*</span>:</label>
                                <select
                                    id="leaderDepartment"
                                    value={leaderDepartment}
                                    onChange={(e) => setLeaderDepartment(e.target.value)}
                                    required={true}
                                >
                                    <option value="" disabled>--Select--</option>
                                    <option value="COMPUTER">COMPUTER</option>
                                    <option value="CSBS">CSBS</option>
                                    <option value="IT">IT</option>
                                    <option value="ENTC">ENTC</option>
                                </select>

                                <label htmlFor="leaderDiv">Leader's Division: <span className='required'>*</span></label>
                                <input
                                    type="text"
                                    id="leaderDiv"
                                    value={leaderDiv}
                                    placeholder="Enter team leader's division"
                                    required={true}
                                    onChange={(e) => setLeaderDiv(e.target.value)}
                                />

                                <label htmlFor="leaderRollNo">Leader's Roll NO: <span className='required'>*</span></label>
                                <input
                                    type="text"
                                    id="leaderRollNo"
                                    value={leaderRollNo}
                                    placeholder="Enter team leader's roll no"
                                    required={true}
                                    onChange={(e) => setLeaderRollNo(e.target.value)}
                                />
                            </div>

                            {/* Member section */}
                            {showMemberForm && (

                                <div className='team-member-section'>
                                    <div className='team-member-section-info'>
                                        <p><i class="fa-solid fa-circle-info"></i> Adding team member is not mandatory</p>
                                        <p style={{
                                            margin: 0,
                                            fontSize: 20,
                                            cursor: 'pointer'
                                        }} onClick={() => { setShowMemberForm(!showMemberForm) }}><i class="fa-regular fa-circle-xmark"></i></p>
                                    </div>

                                    <label className='mem-name' htmlFor="memberName">Team Member's Name:</label>
                                    <input
                                        type="text"
                                        id="memberName"
                                        value={memberName}
                                        placeholder="Enter team team member's name"
                                        onChange={(e) => setMemberName(e.target.value)}
                                    />

                                    <label htmlFor="memberMail">Team Member's Mail:</label>
                                    <input
                                        type="email"
                                        id="memberMail"
                                        value={memberMail}
                                        placeholder="Enter team member's email"
                                        onChange={(e) => setMemberMail(e.target.value)}
                                    />

                                    <label htmlFor="memberPhone">Team Member's Phone No.:</label>
                                    <input
                                        type="tel"
                                        id="memberPhone"
                                        value={memberPhone}
                                        placeholder="Enter team member's phone number"
                                        onChange={(e) => setMemberPhone(e.target.value)}
                                    />

                                    <label htmlFor="memberYear">Team Member's Current Studying Year:</label>
                                    <select
                                        id="memberYear"
                                        value={memberYear}
                                        onChange={(e) => setMemberYear(e.target.value)}
                                    >
                                        <option value="" disabled>--Select--</option>
                                        <option value="First Year">First Year</option>
                                        <option value="Second Year">Second Year</option>
                                        <option value="Third Year">Third Year</option>
                                        <option value="Final Year">Final Year</option>
                                    </select>

                                    <label htmlFor="memberDepartment">Team Member's Department:</label>
                                    <select
                                        id="memberDepartment"
                                        value={memberDepartment}
                                        onChange={(e) => setMemberDepartment(e.target.value)}
                                    >
                                        <option value="" disabled>--Select--</option>
                                        <option value="COMPUTER">COMPUTER</option>
                                        <option value="CSBS">CSBS</option>
                                        <option value="IT">IT</option>
                                        <option value="ENTC">ENTC</option>
                                    </select>

                                    <label htmlFor="memberDiv">Team Member's Division:</label>
                                    <input
                                        type="text"
                                        id="memberDiv"
                                        value={memberDiv}
                                        placeholder="Enter team member's division"
                                        onChange={(e) => setMemberDiv(e.target.value)}
                                    />

                                    <label htmlFor="memberRollNo">Team Member's Roll NO:</label>
                                    <input
                                        type="text"
                                        id="memberRollNo"
                                        value={memberRollNo}
                                        placeholder="Enter team member's roll number"
                                        onChange={(e) => setMemberRollNo(e.target.value)}
                                    />
                                </div>
                            )}

                            {!showMemberForm && (
                                <button className='member-add-btn' type="button" onClick={addMember}>
                                    <i style={{
                                        marginRight: 10
                                    }} class="fa-solid fa-user-plus"></i> Add Team Member
                                </button>
                            )}

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