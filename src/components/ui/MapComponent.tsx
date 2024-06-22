import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
} from "react-geocode";
type Props = {}

export default function MapsComponent({ }: Props) {
    const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: mapsKey
    })
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        console.log(map)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const containerStyle = {
        width: '90%',
        height: '100%',
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    }
    // console.log("item", items)
    // setDefaults({
    //   key: mapsKey,
    //   language: "en",
    // });
    const [latLong, setLatLng] = useState({ lat: 0, lng: 0 })
    // setKey(mapsKey);
    // setLanguage("en");
    // useEffect(() => {
    //     fromAddress("Eiffel Tower")
    //         .then(({ results }) => {
    //             const { lat, lng } = results[0].geometry.location;
    //             setLatLng({ lat, lng })
    //             console.log("ojoejfojejf", lat, lng, map);
    //         })
    //         .catch(console.error);
    // }, [])
    return (
        isLoaded &&

        <div style={{
            position: 'fixed', display: 'flex', width: '40%',
            height: '90%',
        }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>


    )
}