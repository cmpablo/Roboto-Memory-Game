import React from 'react';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';
import Footer from './components/Footer';
import Scorekeeper from './components/Scorekeeper';
//import RobotImage from './components/RobotImage';


const styles = {
  container: {
    padding: 0,
    backgroundColor: '#000'
  }
}

const App = () => (
  <div style={styles.container} className='container-fluid'>
    <Jumbotron />
    <Scorekeeper />
    <Main />
    <Footer />
  </div>
);


export default App;
