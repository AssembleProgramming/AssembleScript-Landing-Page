import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './Rankings.scss';
import SERVER_LINK from '../../../API';
import AssembleNav from '../../../Components/Navbar/Navbar';

const Rankings = () => {
    const [contestRegister, setContestRegister] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${SERVER_LINK}/contest-register-all?page=${currentPage}`);
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
    }, [currentPage]);

    const sortedData = contestRegister.sort((a, b) => {
        // Sort by CONTEST_SCORE in descending order
        if (b.CONTEST_SCORE !== a.CONTEST_SCORE) {
            return b.CONTEST_SCORE - a.CONTEST_SCORE;
        }
        // If CONTEST_SCORE is the same, sort by LAST_SUBMISSION_TIME_STAMP in ascending order
        return a.LAST_SUBMISSION_TIME_STAMP - b.LAST_SUBMISSION_TIME_STAMP;
    });

    return (
        <div style={{
            marginTop: 72,
            padding: 40
        }}>
            <AssembleNav />
            <h2>Codefinity Rankings</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Problem 1</th>
                        <th>Problem 2</th>
                        <th>Problem 3</th>
                        <th>Contest Score</th>
                        <th>Submission Time</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        // Display loading skeleton while waiting for data
                        <tr>
                            <td colSpan="6">
                                <Skeleton count={20} height={35} />
                            </td>
                        </tr>
                    ) : (
                        // Display the sorted data in the table
                        sortedData.map((entry) => (
                            <tr key={entry._id}>
                                <td>{entry.LEADER_NAME}</td>
                                <td>{
                                    entry.QUESTION_ONE_STATUS ?
                                        <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}>{entry.QUESTION_ONE_STATUS.toString()}</p> :
                                        <p style={{ color: "red", margin: 0, background: "#ffeaea" }}>{entry.QUESTION_ONE_STATUS.toString()}</p>
                                }
                                </td>
                                <td>{
                                    entry.QUESTION_TWO_STATUS ?
                                        <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}>{entry.QUESTION_TWO_STATUS.toString()}</p> :
                                        <p style={{ color: "red", margin: 0, background: "#ffeaea" }}>{entry.QUESTION_TWO_STATUS.toString()}</p>
                                }
                                </td>
                                <td>{
                                    entry.QUESTION_THREE_STATUS ?
                                        <p style={{ color: "green", margin: 0, background: "#cbfdcbcc" }}>{entry.QUESTION_THREE_STATUS.toString()}</p> :
                                        <p style={{ color: "red", margin: 0, background: "#ffeaea" }}>{entry.QUESTION_THREE_STATUS.toString()}</p>
                                }
                                </td>
                                <td>{entry.CONTEST_SCORE}</td>
                                <td>{entry.LAST_SUBMISSION_TIME_STAMP ? entry.LAST_SUBMISSION_TIME_STAMP : "--"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

            {/* Add Pagination */}
            <div className="pagination">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} / 5</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 5}>Next</button>
            </div>
        </div>
    );
};

export default Rankings;
