import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Main from './components/Main';

const styles = {
  container: {
    padding: 0,
    backgroundColor: '#000'
  }
}

const App = () => (
  
    <div style={styles.container} className='container-fluid'>
      <Jumbotron />
      <Main />
      <Footer />
    </div>
  );


export default App;
