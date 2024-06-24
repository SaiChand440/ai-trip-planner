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
    const styles = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ];
      
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
                options={{styles}}
            />
        </div>


    )
}