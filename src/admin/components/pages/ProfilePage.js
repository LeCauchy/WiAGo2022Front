import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from './assets/img-2.jpg';

const ProfilePage =  () => {
  return (
    <React.Fragment>
        <MDBRow className="justify-content-center">
        <MDBCol sm="12" md="12" lg="6" className="mb-5">
            <MDBCard>
                <MDBCardImage className="img-fluid" src={src1} />
                <MDBCardBody>
                    <MDBCardTitle className="text-center mb-2 font-bold">WiaGO</MDBCardTitle>
                    <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Geolocation and Mapping</MDBCardTitle>
                    <MDBCardText>
                        <strong className="mb-2">Description : </strong>
                        WiaGO est un module du projet de reseau communautaire basé sur le systeme d'exploitation WiaFirm personnellement concu pour les routeurs dudit reseau, permettant de geolocaliser les routeurs (Geolocation), de les presenter sur une carte (Mapping) et enfin d'etre capable de detecter si un routeur est actif ou pas, de le reperer sur une carte et d'agir rapidement.
                    </MDBCardText>

                    <MDBCardText>
                        <strong className="mb-2">Noeuds : </strong>
                        L'interface Noeuds presente la liste des noeuds ainsi que leurs caracteristiques.
                    </MDBCardText>
                    
                    <MDBCardText>
                        <strong className="mb-2">Carte : </strong>
                        L'interface Carte presente les noeuds sur une carte et on peut voir leurs caracteristiques en cliquant dessus.
                    </MDBCardText>

                    <MDBCardText>
                        <strong className="mb-2">Notifications : </strong>
                        L'interface Notifications presente les notifications sur la creation des noeuds et sur leurs inactivités potentielles.
                    </MDBCardText>

                    <MDBCardText>
                        <strong className="mb-2">Statistiques : </strong>
                        L'interface Statistiques presente le nombre de noeuds ON et le nombre de noeuds DOWN et d'autres informations relatives au systeme.
                    </MDBCardText>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBRow>
    </React.Fragment>
  );
}

export default ProfilePage;