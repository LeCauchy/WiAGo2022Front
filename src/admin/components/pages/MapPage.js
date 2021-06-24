import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import SectionContainer from '../sectionContainer';
import { MDBCardBody, MDBCard, MDBBreadcrumb, MDBBreadcrumbItem, MDBDataTableV5 } from 'mdbreact';
import { BeatLoader } from 'react-spinners'
import API_URL from '../constants';

class MapPage extends React.Component {
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            node: [],
            etat: [],
            openNodes: [],
            closeNodes: [],
            latMean: 0,
            longMean: 0,
            isLoading: true
        };

    }
    redIcon = new L.Icon({
        iconUrl: ("https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [0, -46],
    });
    async componentDidMount() {

        await fetch(API_URL + "node/", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ rows: responseJson });
                this.setState({ openNodes: this.state.rows.filter(node => (-new Date(node.date_creation).getTime() + new Date().getTime()) < 1000 * 60 * 5) })
                this.setState({ closeNodes: this.state.rows.filter(node => (-new Date(node.date_creation).getTime() + new Date().getTime()) > 1000 * 60 * 5) })

                if (this.state.rows.length != 0) {
                    var long = 0;
                    var lat = 0;
                    for (var i = 0; i < this.state.rows.length; i++) {
                        long += this.state.rows[i].longitude - 0
                        lat += this.state.rows[i].latitude - 0
                    }
                    this.setState({ latMean: lat / this.state.rows.length })
                    this.setState({ longMean: long / this.state.rows.length })
                    
                }


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
                                <MDBBreadcrumbItem>Noeuds</MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>Carte</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCardBody>
                    </MDBCard>

                    <MapContainer center={[Number(this.state.latMean), Number(this.state.longMean)]} zoom={17} scrollWheelZoom={true} style={{ height: '100vh', width: '100%' }} onClick={this.componentDidMount} >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            maxZoom="20"
                        />

                    ?

                    {this.state.openNodes.map(node => (
                            <Marker
                                key={node.node_name}
                                position={[Number(node.latitude), Number(node.longitude)]}>

                                <Popup>
                                    <div>
                                        <p>{"Name : " + node.node_name}</p>
                                        <p>{"IP : " + node.ip_address}</p>
                                        <p>{"Date de creation : " + new Date(node.date_creation).toDateString()}</p>
                                        <p>{"Status : ON"}</p>
                                    </div>
                                </Popup>

                            </Marker>

                        ))}


                        {this.state.closeNodes.map(node => (
                            <Marker
                                key={node.node_name}
                                position={[Number(node.latitude), Number(node.longitude)]}
                                icon={this.redIcon}
                            >

                                <Popup>
                                    <div>
                                        <p>{"Name : " + node.node_name}</p>
                                        <p>{"IP : " + node.ip_address}</p>
                                        <p>{"Date de creation : " + new Date(node.date_creation).toDateString()}</p>
                                        <p>{"Status : DOWN"}</p>
                                    </div>
                                </Popup>

                            </Marker>

                        ))}

                    </MapContainer>
                </SectionContainer>
        )

    }
}

export default MapPage