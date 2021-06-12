import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Map, GoogleApiWrapper } from 'google-maps-react'

const Location = () => {
  const [ selected, setSelected ] = useState({});
    
  const onSelect = item => {
    setSelected(item);
  }
  const mapStyles = {        
    height: "70vh",
    width: "60%"
  };
  
  const defaultCenter = {
    lat: 37.924041, lng: -122.057670
  }
  const locations = [
    {
      name: "Walnut Creek",
      address: `1574 Palos Verdes Mall, Walnut Creek, CA 94597`,
      location: { 
        lat: 37.9265318,
        lng: -122.0741261
      },
    },
    {
      name: "Concord",
      address: `785 Oak Grove Rd E4, Concord, CA 94518`,
      location: { 
        lat: 37.9373203,
        lng: -122.0266405
      },
    }
  ]

  122.059645

  return (
    <div className="location-google-maps m-t">
      <h1>Current Locations</h1>
      <div className="container">
        <LoadScript
          googleMapsApiKey='AIzaSyD8-V92NgtKq-zGRysnvmTvEvC6xmYReq0'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}>
              {locations.map(item => {
                  return (
                  <Marker 
                  key={item.name} 
                  position={item.location}
                  onClick={() => onSelect(item)}/>
                  )
                })
              }
              {selected.location && (
                <InfoWindow
                  position={selected.location}
                  clickable={true}
                  onCloseClick={() => setSelected({})}>
                  <p>{selected.name} <br />
                    {selected.address}
                  </p>
                  
                </InfoWindow> )
              }
            </GoogleMap>
        </LoadScript>
      </div>
      <div className="locations-info">
          <div>
            Business Hours:
            Monday - Thursday
            11:00 am – 8:30 pm
            Friday & Saturday
            11:00 am – 9:30 pm
            Sunday
            11:00 am – 8:30 pm
            *Hours are 1/2 hour longer during Spring & Summer months
          </div>
          <div>
            Business Hours:
            Monday - Thursday
            11:00 am – 8:30 pm
            Friday & Saturday
            11:00 am – 9:00 pm
            Sunday
            11:00 am – 8:00 pm
            *Hours are 1/2 hour longer during Spring & Summer months

          </div>
      </div>
    </div>
  )
}

export default Location;
