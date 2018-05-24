import React from 'react';
import '../styles/Scorekeeper.css';

const Scorekeeper = () => (
    <div className='card'>

        <div className='card-body'>
            <h3 id='playerScore'>SCORE: <span id='playerScoreNum'>0</span></h3>
            <h3 id='highScore'>HIGH SCORE: <span id='highScoreNum'>0</span></h3>
        </div>
        
    </div>
);


export default Scorekeeper;