import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import { itineraryResponseSchema } from '../customcomponents/TripPlanForm';
type Props = { data: {} }

export default function MapsComponent({ data }: Props) {
    const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: mapsKey
    })
    const [map, setMap] = React.useState(null)

    const onLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        // markers.forEach(({ position }) => bounds.extend(center));
        // markers.forEach(({ position }) => bounds.extend(center));

        bounds.extend(locationdata[0][0]?.location)
        map.fitBounds(bounds);
       
        var mapZoom = null;
        map.fitBounds(bounds)
        google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
            if (mapZoom != map.getZoom()) {
                mapZoom = (13);
                map.setZoom(mapZoom);
            }
        });
        setMap(map)
        // if (!bounds.isEmpty()) {
        //     var originalMaxZoom = map.maxZoom;
        //     map.setOptions({ maxZoom: 18 });
        //     map.setOptions({ maxZoom: originalMaxZoom });
        // }
    };

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
      
    const containerStyle = {
        width: '90%',
        height: '110%',
    };
    const center = {
        lat: data?.destination?.location.lat,
        lng: data?.destination?.location.lng
    }
    const [locationdata, setLocationdata] = useState([])
    useEffect(() => {
        const tempData = []
        data?.itineraries.map((item) => tempData.push(item.places))
        const filteredData = tempData.map((item, index) => {
            return item.filter((item) => typeof item !== "string")
        }).filter((i)=>i.length!==0)
        setLocationdata(filteredData)
    }, [])


    const defaultMapOptions = {
        styles: obj
    };
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    return (
        isLoaded &&

        <div style={{
            position: 'fixed', display: 'flex', width: '40%',
            height: '90%',
        }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultMapOptions}

            >
                {/* {locationdata.map(({ id, name, position }) => (
                    <Marker
                        key={id}
                        position={center}
                        onClick={() => handleActiveMarker(id)}
                    >
                        {activeMarker === id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div style={{ color: 'red' }}>{id}</div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))} */}
                {locationdata.map((i, index) => i.map(({ location, place }) =>

                    <Marker
                        label={index + 1}
                        key={location.lat}
                        position={location}
                        onClick={() => handleActiveMarker(location.lat)}
                    >
                        {activeMarker === location.lat ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div style={{ color: 'red' }}>{place}</div>
                            </InfoWindow>
                        ) : null}
                    </Marker>)
                )}
            </GoogleMap>
        </div>


    )
}

// const styles = [
   
//   ];

const obj = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    // { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    // { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    // { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    // {
    //   featureType: "administrative.locality",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#d59563" }],
    // },
    // {
    //   featureType: "poi",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#d59563" }],
    // },
    // {
    //   featureType: "poi.park",
    //   elementType: "geometry",
    //   stylers: [{ color: "#263c3f" }],
    // },
    // {
    //   featureType: "poi.park",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#6b9a76" }],
    // },
    // {
    //   featureType: "road",
    //   elementType: "geometry",
    //   stylers: [{ color: "#38414e" }],
    // },
    // {
    //   featureType: "road",
    //   elementType: "geometry.stroke",
    //   stylers: [{ color: "#212a37" }],
    // },
    // {
    //   featureType: "road",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#9ca5b3" }],
    // },
    // {
    //   featureType: "road.highway",
    //   elementType: "geometry",
    //   stylers: [{ color: "#746855" }],
    // },
    // {
    //   featureType: "road.highway",
    //   elementType: "geometry.stroke",
    //   stylers: [{ color: "#1f2835" }],
    // },
    // {
    //   featureType: "road.highway",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#f3d19c" }],
    // },
    // {
    //   featureType: "transit",
    //   elementType: "geometry",
    //   stylers: [{ color: "#2f3948" }],
    // },
    // {
    //   featureType: "transit.station",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#d59563" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "geometry",
    //   stylers: [{ color: "#17263c" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "labels.text.fill",
    //   stylers: [{ color: "#515c6d" }],
    // },
    // {
    //   featureType: "water",
    //   elementType: "labels.text.stroke",
    //   stylers: [{ color: "#17263c" }],
    // },
]
