import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import teslaData from '../data/testdata.json'

class MapPage extends Component {

    test = {
        lat: 3.8567936,
        lng: 11.5113984
    }

    redIcon = new L.Icon({
        iconUrl: ("https://raw.githubusercontent.com/codegeous/react-component-depot/master/src/resources/images/marker.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [0, -46],
    });
    blueIcon = new L.Icon({
        iconUrl: ("https://toppng.com/uploads/preview/ushpin-png-pic-blue-push-pin-11562974655c9ynfiavhn.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46],
        popupAnchor: [0, -46],
    });

    openStations = teslaData.filter(tesla => tesla.status === "OPEN")
    closeStations = teslaData.filter(tesla => tesla.status === "CLOSED")
    //filteredStations = testData.filter(tsla => tsla.address.country === "Italy")

    render() {
        return (
            <MapContainer center={[3.8623896, 11.4992693]} zoom={17} scrollWheelZoom={true} style={{height: '100vh', width:'100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom = "20"
                />

                {this.openStations.map(tesla => (
                    <Marker
                        key={tesla.id}
                        position={[tesla.gps.latitude, tesla.gps.longitude]}>

                        <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
                            <div>
                                <h2>{"Name : " + tesla.name}</h2>
                                <p>{"Status : " + tesla.status}</p>
                                <p>{"Location : " + tesla.locationId}</p>
                            </div>
                        </Popup>

                    </Marker>

                ))}

                {this.closeStations.map(tesla => (
                    <Marker
                        key={tesla.id}
                        position={[tesla.gps.latitude, tesla.gps.longitude]}
                        icon={this.redIcon}>

                        <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
                            <div>
                                <h2>{"Name : " + tesla.name}</h2>
                                <p>{"Status : " + tesla.status}</p>
                                <p>{"Location : " + tesla.locationId}</p>
                            </div>
                        </Popup>

                    </Marker>

                ))}
            </MapContainer>
        )

    }
}

export default MapPage