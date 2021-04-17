import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const TablesPage =  () => {
  return (
    <>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">Notifications</h4>
          </MDBView>
          <MDBCardBody>
            <MDBTable>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                  <th>  Opération</th>
                  <th>Severité</th>
                  <th>Message</th>
                  <th> Identifiant </th>
                </tr>
              </MDBTableHead> 
              <MDBTableBody color = 'primary'>
                <tr>
                  <td>Ajout</td>
                  <td> Aucune</td>
                  <td> Un noeud vient d'être ajouté au réseau</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>Supression</td>
                  <td> Attention </td>
                  <td> Un noeud vient d'être supprimé au réseau</td>
                  <td> </td>

                </tr>
                <tr>
                  <td>Modification</td>
                  <td> Aucune</td>
                  <td> Un noeud vient d'être ajouter au réseau</td>
                  <td> </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}

export default TablesPage;