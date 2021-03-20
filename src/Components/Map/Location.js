import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '310px',
    height: '310px'
};

const center = {
    lat: 23.807140434820738,
    lng: 90.36869779731718
};

function Location() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyChItWjLTOoxkJFWMPLETvhEFFZ5NVI5Fw"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Location)