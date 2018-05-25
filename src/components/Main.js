import React, {Component} from 'react';
import RobotImage from './RobotImage';
import Scorekeeper from './Scorekeeper';
import robots from '../robots.json'

class Main extends Component {

    state = {
        robots,
        clickedRobots: [],
        score: 0
    };

    clickImage = event => {
        const currentRobots = event.target.alt;
        const robotClicked = this.state.clickedRobots.indexOf(currentRobots) > -1;
      
        if (robotClicked) {
          // if robot is no longer in play but clicked --> game resets, robots do the shuffle
          this.setState({
            robots: this.state.robots.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedRobots: [],
            score: 0
          });

          // create some sort of an alert

        } else {

          // if robot is still in play and clicked --> score increases by 1, robots do the shuffle

          this.setState ({
            robots: this.state.robots.sort(function(a, b) {
              return 0.5 - Math.random();
          }),
          clickedRobots: this.state.clickedRobots.concat(
            currentRobots
          ),
          score: this.state.score + 1
        },
        
        // if all robots are successfully clicked --> YOU WIN message, game resets

        () => {
          if (this.state.score === 12) {

            // create YOU WIN message

            this.setState({
              robots: this.state.robots.sort(function(a, b) {
                return 0.5 - Math.random();
            }),
            clickedRobots: [],
            score: 0
            });
          }
        }
      )};
    }

  render() {
    return (
      <div className='container-fluid'>
        <Scorekeeper score={this.state.score} />
          <div className='container' id='robotSection'>
            {this.state.robots.map(robot => (
                <RobotImage
                clickImage={this.clickImage}
                id={robot.id}
                key={robot.id}
                image={robot.image}
                alt={robot.alt}
            />
            ))}
          </div>
      </div>
    );
  };
};

export default Main;