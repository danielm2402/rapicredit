import React from 'react'
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function Direction(props) {

    const position = [51.505, -0.09]
    return (
        <div style={{ width: '80%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2>Visitanos en nuestras oficinas</h2>
            <p>{props.title}</p>
            <MapContainer style={{ height: '50%', width: '100%' }} center={props.coords} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.coords}>
                    <Popup>
                        RapiCredit
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
