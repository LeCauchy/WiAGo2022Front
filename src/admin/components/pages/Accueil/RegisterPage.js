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

class RegisterPage extends Component {
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
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className='h4 text-center py-4 title'>Sign up</p>
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
                                        label='Your email'
                                        icon='envelope'
                                        group
                                        type='email'
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
                                    <MDBInput
                                        label='Confirm your password'
                                        icon='exclamation-triangle'
                                        group
                                        type='password'
                                        validate
                                        error='wrong'
                                        success='right'
                                    />
                                </div>
                                <div className='text-center py-4 mt-3'>
                                    <MDBBtn color='cyan' type='submit'>
                                        Register
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

export default RegisterPage;
