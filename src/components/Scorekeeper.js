import React, { Component } from 'react';
import '../styles/Scorekeeper.css';

class Scorekeeper extends Component {
    render() {
        return(
        <div className='card'>
            <div className='row'>
                <div className='col'>
                    <h3 id='playerScore'><span className="fas fa-robot" id="robotIcon"></span>YOUR SCORE: {this.props.score}</h3>
                </div>
                <div className='col'>
                    <h3 id='alert'>blerg</h3>
                </div>
            </div>
        </div>
        );
    }
}


export default Scorekeeper;