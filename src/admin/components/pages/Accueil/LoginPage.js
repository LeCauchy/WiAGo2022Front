import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import '../../style.css'

class LoginPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  render() {
    const { modal } = this.state;

    return (
      <MDBContainer className='mt-5'>
        <SectionContainer className='row' noBorder>
          <MDBCol md='6'>
            <MDBCard >
              <MDBCardBody >
                <form class="form">
                  <p className='h4 text-center py-4'>Sign up</p>
                  <div className='grey-text'>
                    <MDBInput
                      label='Your name'
                      icon='user'
                      group
                      type='text'
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Your password'
                      icon='lock'
                      group
                      type='password'
                      validate
                    />
                  </div>
                  <div className='text-center py-4 mt-3'>
                    <MDBBtn color='cyan' type='submit'>
                      Login
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default LoginPage;
