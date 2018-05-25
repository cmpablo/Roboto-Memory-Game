import React, { Component } from 'react';
import '../styles/Scorekeeper.css';

class Scorekeeper extends Component {
    render() {
        return(
        <div className='card'>
            <div className='row'>
                <div className='col'>
                    <h3 id='playerScore'>SCORE: {this.props.score}</h3>
                </div>
                {/* <div className='col'>
                    <h3 id='highScore'>HIGH SCORE: <span id='highScoreNum'>0</span></h3>
                </div> */}
            </div>
        </div>
        );
    }
}


export default Scorekeeper;