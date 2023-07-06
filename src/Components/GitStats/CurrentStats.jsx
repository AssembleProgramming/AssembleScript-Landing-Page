import React, { useEffect, useState } from 'react';
import './CurrentStats.scss'

const RepoStats = () => {
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    useEffect(() => {
        fetchRepoStars();
    }, []);
    const fetchRepoStars = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/AssembleProgramming/AssembleScript');
            const data = await response.json();
            setForks(data.forks_count)
            setStars(data.stargazers_count);
        } catch (error) {
            console.log(error);
        }
    };

    return <div className='repo-stats'>
        <p className='stats-info'><i class="fa-solid fa-star"></i> Stars: {stars}</p>
        <p className='stats-info'><i class="fa-solid fa-code-fork"></i> Forks: {forks}</p>
    </div>;
};

export default RepoStats;
