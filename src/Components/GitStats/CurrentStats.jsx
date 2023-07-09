import React, { useEffect, useState } from 'react';
import './CurrentStats.scss'

const RepoStats = () => {

    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    const token = "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";
    const headers = {
        Authorization: `Bearer ${token}`
    };

    useEffect(() => {
        fetchRepoStars();
    }, []);
    const fetchRepoStars = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/AssembleProgramming/AssembleScript', {headers});
            const data = await response.json();
            setForks(data.forks_count)
            setStars(data.stargazers_count);
        } catch (error) {
            console.log(error);
        }
    };

    return <div className='repo-stats'>
        <p className='stats-info'><i className="fa-solid fa-star"></i> Stars: {stars}</p>
        <p className='stats-info'><i className="fa-solid fa-code-fork"></i> Forks: {forks}</p>
    </div>;
};

export default RepoStats;
