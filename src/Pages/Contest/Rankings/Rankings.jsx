import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './Rankings.scss';
import SERVER_LINK from '../../../API';
import AssembleNav from '../../../Components/Navbar/Navbar';
import { Tooltip } from 'react-tooltip';
import Footer from '../../../Components/Footer/Footer';


const Rankings = () => {
    const [contestRegister, setContestRegister] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);
            try {
                const response = await fetch(`${SERVER_LINK}/contest-register-all`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setContestRegister(data.teams);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const sortedData = contestRegister.sort((a, b) => {
        if (b.CONTEST_SCORE !== a.CONTEST_SCORE) {
            return b.CONTEST_SCORE - a.CONTEST_SCORE;
        }
        return a.LAST_SUBMISSION_TIME_STAMP - b.LAST_SUBMISSION_TIME_STAMP;
    });

    return (
        <>
            <div style={{
                marginTop: 72,
                padding: 40,
                paddingTop: 20
            }}>
                <AssembleNav />
                <h2 style={{ marginBottom: 10 }}>Ranking of Codefinity-2023 </h2>
                <div className="how-we-calculate-ranking" style={{ marginBottom: 30 }}>
                    <h5>Note: </h5>
                    <p style={{ marginBottom: 5 }}>
                        <strong style={{ color: "#4b32c3" }}>How We Calculate Ranking?</strong>
                    </p>
                    <p>
                        The ranking is determined based on the contest score and the time of submission. Each user's contest score is a cumulative total of points earned across different problems. The users are then ranked in descending order of their contest scores.
                        <br />
                        In the event of tied contest scores, we further sort the users based on the timestamp of their last submission. Users with earlier submissions are given a higher rank. This ensures a fair and dynamic ranking that reflects both performance and timely participation.
                    </p>
                    <p style={{ marginBottom: 5 }}>
                        <strong style={{ color: "#4b32c3" }}>How We Calculate Timestamp?</strong>
                    </p>
                    <p>
                        To calculate the timestamp, we use the contest start time (ST) as a reference point. The current time is obtained, and the duration in minutes since the start of the contest is calculated using the formula:
                    </p>
                    <pre>
                        Finish Time = (currentSubmissionTime - contestStartTime) / (1000 * 60)
                    </pre>
                    <p>
                        This timestamp is then used to determine the order of submissions in cases where users have the same contest score.
                    </p>
                </div>

                <div className="tab">
                    <Table style={{
                        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.08)"
                    }} bordered>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Q 1) (10)</th>
                                <th>Q 2) (20)</th>
                                <th>Q 3) (20)</th>
                                <th>Contest Score</th>
                                <th>Finish Time <i class="fa-solid fa-circle-question" id="tool-tip"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                // Display loading skeleton while waiting for data
                                <tr>
                                    <td colSpan="7">
                                        <Skeleton count={20} height={35} />
                                    </td>
                                </tr>
                            ) : (
                                sortedData.length
                                    ?
                                    sortedData.map((entry, index) => (
                                        <tr key={entry._id}>
                                            <td>{(index + 1)}</td>
                                            <td>{entry.TEAM_NAME}</td>
                                            <td>{
                                                entry.QUESTION_ONE_STATUS ?
                                                    <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}><i class="fa-solid fa-shield-halved"></i> Solved</p> :
                                                    <p style={{ color: "red", margin: 0, background: "#ffeaea" }}><i class="fa-solid fa-spider"></i> Un-Solved</p>
                                            }
                                            </td>
                                            <td>{
                                                entry.QUESTION_TWO_STATUS ?
                                                    <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}><i class="fa-solid fa-shield-halved"></i> Solved</p> :
                                                    <p style={{ color: "red", margin: 0, background: "#ffeaea" }}><i class="fa-solid fa-spider"></i> Un-Solved</p>
                                            }
                                            </td>
                                            <td>{
                                                entry.QUESTION_THREE_STATUS ?
                                                    <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}><i class="fa-solid fa-shield-halved"></i> Solved</p> :
                                                    <p style={{ color: "red", margin: 0, background: "#ffeaea" }}><i class="fa-solid fa-spider"></i> Un-Solved</p>
                                            }
                                            </td>
                                            <td>{entry.CONTEST_SCORE}</td>
                                            <td>{entry.LAST_SUBMISSION_TIME_STAMP ? entry.LAST_SUBMISSION_TIME_STAMP : "--"}</td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="7">
                                            <h3 style={{
                                                margin: 0,
                                                padding: "80px 0",
                                                color: "#6c6c6c"
                                            }}>Nobody has submitted</h3>
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                <Tooltip anchorSelect="#tool-tip" place="top">
                    <p style={{
                        textAlign: "center",
                        color: "#fff",
                        margin: 0,
                        fontWeight: 600
                    }}>
                        Acceptance time of your
                        <br />
                        last correct submission
                        <br />
                        in minutes.
                    </p>
                </Tooltip>

            </div>
            <Footer />
        </>

    );
};

export default Rankings;
