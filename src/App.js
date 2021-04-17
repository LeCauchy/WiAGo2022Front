
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import FixNavPage from './admin/components/FixNavPage';
import './admin/index.css';
import './style.css'
import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="flexible-content">
          <FixNavPage />
          <main className="p-5">
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
