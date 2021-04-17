/* confirmer les caractéristiques d'un WAP avant son ajout dans le réseau*/

import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBTooltip,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class ModalPage extends Component {
  state = {
    modal1: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  showFunction = () => {
    alert('This event is fired just before the modal is open.');
  };

  hideFunction = () => {
    alert('This event is fired just before the modal is hidden.');
  };

  hiddenFunction = () => {
    alert('This event is fired after the modal is closed.');
  };

  render() {
    const {
      mailAddress,
      modal1,
      modal10,
      modal11,
      modal12,
      modal13,
      modal14,
      modal15,
      modal16,
      modal17,
      modal18,
      modal19,
      modal2,
      modal20,
      modal3,
      modal4,
      modal5,
      modal6,
      modal7,
      modal8,
      modal9
    } = this.state;
    return (
      <MDBContainer>
        <SectionContainer header='Disable backdrop' flexCenter>
          <MDBBtn onClick={this.toggle(19)} color='danger'>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal19} toggle={this.toggle(19)} disableBackdrop>
            <MDBModalHeader toggle={this.toggle(19)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(19)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Focus Trap' flexCenter>
          <MDBBtn onClick={this.toggle(1)} color='success'>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal20} toggle={this.toggle(21)} disableFocusTrap={false}>
            <MDBModalHeader toggle={this.toggle(20)}> Node Caracteristics </MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(20)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Vertically centered' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(14)}>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal14} toggle={this.toggle(14)} centered disableFocusTrap={false}>
            <MDBModalHeader toggle={this.toggle(14)}>Node Configuration</MDBModalHeader>
            <MDBModalBody>
              Ici tu mets les caractéristiques du noeud entré par l'utilisateur
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn color='success'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ConfirmPage;
