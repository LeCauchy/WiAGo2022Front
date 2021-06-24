import React from 'react';
import SectionContainer from '../sectionContainer';
import { MDBCardBody, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBDataTableV5 } from 'mdbreact';
import { BeatLoader } from 'react-spinners'
import API_URL from '../constants';
import { MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';


class DashboardPage extends React.Component {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      node: [],
      etat: [],
      notif: [],

      openNodes: [],
      closeNodes: [],
      isLoading: true
    };

  }

  async componentDidMount() {

    await fetch(API_URL + "node/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({ rows: responseJson });
        this.setState({ openNodes: this.state.rows.filter(node => (-new Date(node.date_creation).getTime() + new Date().getTime()) < 1000 * 60 * 5) })
        this.setState({ closeNodes: this.state.rows.filter(node => (-new Date(node.date_creation).getTime() + new Date().getTime()) > 1000 * 60 * 5) })
      })

      await fetch(API_URL + "state/", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      }).then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({ etat: responseJson });
          var open = []
          var closed = []
          for (var i = this.state.rows.length - 1; i >= 0; i--) {
            for (var j = this.state.etat.length - 1; j >= 0; j--) {
  
              if (this.state.rows[i].ip_address == this.state.etat[j].ip_address) {
  
                if ((-new Date(this.state.etat[j].date_on).getTime() + new Date().getTime()) < 1000 * 60 * 5) {
                  open.push(this.state.rows[i])
                } else {
  
                  fetch(API_URL + 'notif/', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-type': 'application/json'
                    },
                    body: JSON.stringify(
                      {
                        "name": this.state.rows[i].node_name,
                        "ip_address": this.state.rows[i].ip_address,
                        "type": "Down"
                      }
                    )
                  })
  
  
                  closed.push(this.state.rows[i])
  
                }
                break;
  
              }
            }
          }
  
          this.setState({ openNodes: open })
          this.setState({ closeNodes: closed })
          this.setState({ isLoading: false })
        })

    await fetch(API_URL + "notif/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ notif: responseJson });
      })



  }

  render() {
    return (
      this.state.isLoading && (this.state.closeNodes.length != 0 || this.state.closeNodes.length != 0)
        ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <BeatLoader loading={this.state.isLoading} size={50} color="#417ef7" />
        </div>
        :
        <SectionContainer>
          <MDBCard className="mb-5">
            <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
              <MDBBreadcrumb>
                <MDBBreadcrumbItem>Statistiques</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCardBody>
          </MDBCard>

          <MDBRow className="mb-4">
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="money-bill-alt" className="primary-color" />
                  <div className="data">
                    <strong><p>NOEUDS</p></strong>
                    <h4>
                      <strong>{this.state.rows.length} </strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                      style={{ width: '100%' }}></div>
                  </div>
                  <MDBCardText>Tous les noeuds</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="chart-line" className="warning-color" />
                  <div className="data">
                    <strong><p>NOEUDS ON</p></strong>
                    <h4>
                      <strong>{this.state.openNodes.length}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                      style={{ width: this.state.openNodes.length * 100 / this.state.rows.length + "%" }}></div>
                  </div>
                  <MDBCardText>Le nombre de noeuds actifs</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
                  <div className="data">
                    <strong><p>NOEUD DOWN</p></strong>
                    <h4>
                      <strong>{this.state.closeNodes.length}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                      style={{ width: this.state.closeNodes.length * 100 / this.state.rows.length + "%" }}></div>
                  </div>
                  <MDBCardText>Le nombre de noeuds inactifs</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="money-bill-alt" className="primary-color" />
                  <div className="data">
                    <strong><p>NOTIFICATIONS</p></strong>
                    <h4>
                      <strong>{this.state.notif.length} </strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                      style={{ width: '100%' }}></div>
                  </div>
                  <MDBCardText>Toutes les notifications</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="chart-line" className="warning-color" />
                  <div className="data">
                    <strong><p>NOTIFICATIONS DE CREATION</p></strong>
                    <h4>
                      <strong>{this.state.notif.filter(noti => noti.type == "Creation").length}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                      style={{ width: this.state.notif.filter(noti => noti.type == "Creation").length * 100 / this.state.notif.length + "%" }}></div>
                  </div>
                  <MDBCardText>Le nombre de notifications de creation</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol xl="4" md="6" className="mb-r">
              <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                  <MDBIcon icon="chart-pie" className="light-blue lighten-1" />
                  <div className="data">
                    <strong><p>NOTIFACTIONS DOWN</p></strong>
                    <h4>
                      <strong>{this.state.notif.filter(noti => noti.type == "Down").length}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                      style={{ width: this.state.notif.filter(noti => noti.type == "Down").length * 100 / this.state.notif.length + "%" }}></div>
                  </div>

                  <MDBCardText>Le nombre de notifications d'inactivité</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        </SectionContainer>

    )
  }

}

export default DashboardPage;