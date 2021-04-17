/*
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './admin/components/Routes';
import TopNavigation from './admin/components/topNavigation';
import SideNavigation from './admin/components/sideNavigation';
import Footer from './admin/components/Footer';
import './admin/index.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';

class FixNavPage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
        <div className = 'navbar'>
          <MDBNavbar color='black' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <strong className='align-middle logo' > <MDBIcon icon='route'/> WIAGO </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <MDBIcon icon = 'home'/>
                    <span> <strong>Home</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/map'
                  >
                    <MDBIcon icon ='map-marker-alt' />
                    <span> <strong> Noeud </strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/tables'
                  >
                    <MDBIcon icon='envelope-square' />
                    <span> <strong>Alertes</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='tables'
                  > 
                    <MDBIcon icon="bell" />                  
                    <span> <strong>Notifications</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/'
                  >
                    <MDBIcon icon ='chart-line' />
                    <span> <strong>Statistiques</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/'
                  > 
                    <MDBIcon icon="cog" />
                    <span> <strong>Paramètres</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/profile'
                  >
                    <MDBIcon icon="user" />
                    <span> <strong>Profil</strong> </span>
                  </MDBNavLink>
                </MDBNavItem>
                            
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}   
        </div>
    );
  }
}

export default FixNavPage;

