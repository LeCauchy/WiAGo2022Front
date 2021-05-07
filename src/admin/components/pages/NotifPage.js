import React from "react";
import { MDBContainer, MDBAlert, MDBTable, MDBTableBody } from 'mdbreact';

const NotifPage = () => {
  return (
    <MDBContainer>
      <MDBAlert color="success" >
        <MDBTable>
            <MDBTableBody >
                <tr>
                  <td>Ajout</td>
                  <td> Aucune</td>
                  <td> Un noeud vient d'être ajouté au réseau</td>
                  <td> </td>
                </tr>
            </MDBTableBody>
        </MDBTable>
      </MDBAlert>
      {/* <MDBAlert color="secondary" >
        A simple secondary alert—check it out!
      </MDBAlert>
      <MDBAlert color="success" >
        A simple success alert—check it out!
      </MDBAlert>
      <MDBAlert color="danger" >
        A simple success alert—check it out!
      </MDBAlert>
      <MDBAlert color="warning" >
        A simple warning alert—check it out!
      </MDBAlert>
      <MDBAlert color="info" >
        A simple info alert—check it out!
      </MDBAlert>
      <MDBAlert color="light" >
        A simple light alert—check it out!
      </MDBAlert>
      <MDBAlert color="dark" >
        A simple dark alert—check it out!
      </MDBAlert> */}
    </MDBContainer>
  );
};

export default NotifPage;