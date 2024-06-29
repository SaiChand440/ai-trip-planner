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

        bounds.extend(center)
        map.fitBounds(bounds);

        // google.maps.event.addListener(map, 'bounds_changed', function (event) {
        //     google.maps.event.removeListener(zoomChangeBoundsListener);
        // });
        var mapZoom = null;
        google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
            if (mapZoom != map.getZoom()) {
                mapZoom = (15);
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
        lat: data?.trip_data?.destination?.location.lat,
        lng: data?.trip_data?.destination?.location.lng
    }
    const [locationdata, setLocationdata] = useState([])
    useEffect(() => {
        const tempData = []
        data.trip_data?.itineraries.map((item) => tempData.push(item.places))
        const filteredData = tempData.map((item, index) => {
            return item.filter((item) => typeof item !== "string")
        })
        setLocationdata(filteredData)
        console.log("trip data", filteredData)
    }, [])

    const [latLong, setLatLng] = useState({ lat: 0, lng: 0 })

    const defaultMapOptions = {
        styles: obj
    };
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        console.log("mar", marker)
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
                        title='dwd'
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
    }
]
