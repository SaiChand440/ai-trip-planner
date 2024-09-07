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

    const onLoad = (map: google.maps.Map) => {
        const bounds = new google.maps.LatLngBounds();
        // markers.forEach(({ position }) => bounds.extend(center));
        // markers.forEach(({ position }) => bounds.extend(center));

        bounds.extend((locationdata[0][0] as any)?.location)
        map.fitBounds(bounds);
       
        var mapZoom: any = null;
        map.fitBounds(bounds)
        google.maps.event.addListenerOnce(map, 'bounds_changed', function () {
            if (mapZoom != map.getZoom()) {
                mapZoom = (13);
                map.setZoom(mapZoom);
            }
        });
        setMap(map as any)
        // if (!bounds.isEmpty()) {
        //     var originalMaxZoom = map.maxZoom;
        //     map.setOptions({ maxZoom: 18 });
        //     map.setOptions({ maxZoom: originalMaxZoom });
        // }
    };

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])
    const containerStyle = {
        width: '90%',
        height: '110%',
    };

    const center = {
        lat: (data as any)?.destination?.location.lat,
        lng: (data as any)?.destination?.location.lng
    }
    const [locationdata, setLocationdata] = useState<any[]>([])
    useEffect(() => {
        const tempData: any[] =[];
        (data as any)?.itineraries.map((item: any) => tempData.push(item.places))
        const filteredData = tempData.map((item, index) => {
            return item.filter((item: any) => typeof item !== "string")
        }).filter((i)=>i.length!==0)
        setLocationdata(filteredData)
    }, [])

    // useEffect(() => {
    //     const tempData: any[] = []
    //     ;(data as any)?.itineraries?.forEach((item: any) => {
    //         if (Array.isArray(item.places)) {
    //             tempData.push(...item.places)
    //         }
    //     })
    //     // ... rest of the useEffect code
    // }, [])

    const defaultMapOptions = {
        styles: obj
    };
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
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
                {locationdata.map((i, index) => i.map(({ location, place }: any) =>

                    <Marker
                        label={index + 1 +""}
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
