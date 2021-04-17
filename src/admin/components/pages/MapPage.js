import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import testData from '../data/testdata.json'

class MapPage extends Component {

    test = {
        lat: 3.8567936,
        lng: 11.5113984
    }

    filteredStations = testData.filter(tsla => tsla.address.country === "Italy")
       
    render() {
        return (
            <MapContainer center={[this.test.lat, this.test.lng]} zoom={5} scrollWheelZoom={false} style={{height: '100vh', width:'100%'}}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom = "19"
                />

                {testData.map(tesla => (
                    <Marker
                    key = {tesla.id}
                    position = { [tesla.gps.latitude, tesla.gps.longitude]}>

                    </Marker>
                ))} 
            </MapContainer>
        )
        
    }
}

export default MapPage