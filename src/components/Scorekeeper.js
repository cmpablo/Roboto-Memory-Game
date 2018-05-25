import React, { Component } from 'react';
import '../styles/Scorekeeper.css';

class Scorekeeper extends Component {
    render() {
        return(
        <div className='card'>
            <h3 id='playerScore'><span className="fas fa-robot"></span>YOUR SCORE: {this.props.score}</h3>
        </div>
        );
    }
}


export default Scorekeeper;