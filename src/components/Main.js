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
        // if robot is no longer in play but clicked --> you LOSE, game resets.
        this.setState({
          robots: this.state.robots.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedRobots: [],
          score: 0
        });

          alert('Sad horns. You lose. Try again.');

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
      
      // if all robots are successfully clicked --> YOU WIN, game resets.
      () => {
        if (this.state.score === 12) {

          alert('YOU WIN! Your memory is stellar. The robots applaud you.');

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