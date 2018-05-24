import React, {Component} from 'react';
import '../styles/Main.css';
import RobotImage from './RobotImage';
import robots from '../robots.json'

class Main extends Component {

    state = {
        robots
    };

    render() {
        return (
            <div className='container'>
            {this.state.robots.map(robot => (
                <RobotImage
                id={robot.id}
                key={robot.id}
                image={robot.image}
                alt={robot.alt}
            />
            ))}
            </div>
        );
    }
}

export default Main;