import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBBtn, MDBBtnGroup,
  MDBIcon
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import '../../style.css'

class AddNodePage extends Component {
  state = {
    activeItem: '1'
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' bottom='true'>
              <SectionContainer header='Ajouter un noeud'>
                <MDBNav className='nav-tabs'>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '1'}
                      onClick={this.toggle('1')}
                      role='tab'
                    >
                      General
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '2'}
                      onClick={this.toggle('2')}
                      role='tab'
                    >
                      Techniques
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to='#'
                      active={activeItem === '3'}
                      onClick={this.toggle('3')}
                      role='tab'
                    >
                      Géolocalisation
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={activeItem}>
                  <MDBTabPane tabId='1' role='tabpanel'>
                    <SectionContainer id='generalNode'>
                      <form >
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Nom </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label type='text' className='col-sm-2 col-form-label'> <span id='form'> Marque </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> N° Serie </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                      </form>
                    </SectionContainer>
                  </MDBTabPane>
                  <MDBTabPane tabId='2' role='tabpanel'>
                    <SectionContainer id='technicalNode'>
                      <form>                       
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Norme réseau </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Débit </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Bande Passante </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Cryptage </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-3 col-form-label'> <span id='form'> Compatibilité IPv6 </span> </label>                    
                          <div className='col-sm-9'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-3 col-form-label'> <span id='form'> Compatibilité MU-MIMO </span> </label>                    
                          <div className='col-sm-9'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-3 col-form-label'> <span id='form'> Nombre de Multi-SSID </span> </label>                    
                          <div className='col-sm-9'>
                            <input />
                          </div>
                        </div>
                      </form>                     
                    </SectionContainer>
                  </MDBTabPane>
                  <MDBTabPane tabId='3' role='tabpanel'>
                    <SectionContainer id='geolocationNode'>
                      <form>                        
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Latitude </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Longitude </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                        <div class='form-group row'>
                          <label className='col-sm-2 col-form-label'> <span id='form'> Altitude </span> </label>                    
                          <div className='col-sm-10'>
                            <input />
                          </div>
                        </div>
                      </form>
                    </SectionContainer>
                  </MDBTabPane>
                </MDBTabContent>
                
                <MDBIcon icon='magic'></MDBIcon>
                <MDBModal>

                </MDBModal>
              </SectionContainer>
              <div className='confirm'>
                <MDBBtn outline color='success'> <strong> Ajouter </strong> </MDBBtn>
                <MDBBtn outline color='danger'> Annuler </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default AddNodePage;
