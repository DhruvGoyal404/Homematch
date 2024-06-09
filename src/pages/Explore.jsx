import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ChevronDown } from 'react-feather';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { auth } from "../components/Firebase";  // Import auth from your Firebase configuration

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '300px' // Added minimum height to ensure visibility
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};


const states = [
  { name: 'Alabama', number: 1 },
  { name: 'Alaska', number: 2 },
  { name: 'Arizona', number: 3 },
  { name: 'Arkansas', number: 4 },
  { name: 'California', number: 5 },
  { name: 'Colorado', number: 6 },
  { name: 'Connecticut', number: 7 },
  { name: 'Delaware', number: 8 },
  { name: 'Florida', number: 9 },
  { name: 'Georgia', number: 10 },
  { name: 'Hawaii', number: 11 },
  { name: 'Idaho', number: 12 },
  { name: 'Illinois', number: 13 },
  { name: 'Indiana', number: 14 },
  { name: 'Iowa', number: 15 },
  { name: 'Kansas', number: 16 },
  { name: 'Kentucky', number: 17 },
  { name: 'Louisiana', number: 18 },
  { name: 'Maine', number: 19 },
  { name: 'Maryland', number: 20 },
  { name: 'Massachusetts', number: 21 },
  { name: 'Michigan', number: 22 },
  { name: 'Minnesota', number: 23 },
  { name: 'Mississippi', number: 24 },
  { name: 'Missouri', number: 25 },
  { name: 'Montana', number: 26 },
  { name: 'Nebraska', number: 27 },
  { name: 'Nevada', number: 28 },
  { name: 'New Hampshire', number: 29 },
  { name: 'New Jersey', number: 30 },
  { name: 'New Mexico', number: 31 },
  { name: 'New York', number: 32 },
  { name: 'North Carolina', number: 33 },
  { name: 'North Dakota', number: 34 },
  { name: 'Ohio', number: 35 },
  { name: 'Oklahoma', number: 36 },
  { name: 'Oregon', number: 37 },
  { name: 'Pennsylvania', number: 38 },
  { name: 'Rhode Island', number: 39 },
  { name: 'South Carolina', number: 40 },
  { name: 'South Dakota', number: 41 },
  { name: 'Tennessee', number: 42 },
  { name: 'Texas', number: 43 },
  { name: 'Utah', number: 44 },
  { name: 'Vermont', number: 45 },
  { name: 'Virginia', number: 46 },
  { name: 'Washington', number: 47 },
  { name: 'West Virginia', number: 48 },
  { name: 'Wisconsin', number: 49 },
  { name: 'Wyoming', number: 50 }
];

const capitals = [
  { name: 'Montgomery', location: { lat: 32.3619, lng: -86.2832 }, state: 'Alabama' },
  { name: 'Juneau', location: { lat: 58.3019, lng: -134.4191 }, state: 'Alaska' },
  { name: 'Phoenix', location: { lat: 33.4484, lng: -112.0739 }, state: 'Arizona' },
  { name: 'Little Rock', location: { lat: 34.7463, lng: -92.2891 }, state: 'Arkansas' },
  { name: 'Sacramento', location: { lat: 38.5816, lng: -121.4944 }, state: 'California' },
  { name: 'Denver', location: { lat: 39.7392, lng: -104.9903 }, state: 'Colorado' },
  { name: 'Hartford', location: { lat: 41.7619, lng: -72.6766 }, state: 'Connecticut' },
  { name: 'Dover', location: { lat: 39.1592, lng: -75.5231 }, state: 'Delaware' },
  { name: 'Tallahassee', location: { lat: 30.4383, lng: -84.2789 }, state: 'Florida' },
  { name: 'Atlanta', location: { lat: 33.7489, lng: -84.3879 }, state: 'Georgia' },
  { name: 'Honolulu', location: { lat: 21.3069, lng: -157.8583 }, state: 'Hawaii' },
  { name: 'Boise', location: { lat: 43.6133, lng: -116.2036 }, state: 'Idaho' },
  { name: 'Springfield', location: { lat: 39.8025, lng: -89.6491 }, state: 'Illinois' },
  { name: 'Indianapolis', location: { lat: 39.7683, lng: -86.1582 }, state: 'Indiana' },
  { name: 'Des Moines', location: { lat: 41.5333, lng: -93.625 }, state: 'Iowa' },
  { name: 'Topeka', location: { lat: 39.0333, lng: -95.6742 }, state: 'Kansas' },
  { name: 'Frankfort', location: { lat: 38.1939, lng: -84.8753 }, state: 'Kentucky' },
  { name: 'Baton Rouge', location: { lat: 30.4572, lng: -91.1873 }, state: 'Louisiana' },
  { name: 'Augusta', location: { lat: 44.3292, lng: -69.7741 }, state: 'Maine' },
  { name: 'Annapolis', location: { lat: 38.9753, lng: -76.4944 }, state: 'Maryland' },
  { name: 'Boston', location: { lat: 42.3584, lng: -71.0594 }, state: 'Massachusetts' },
  { name: 'Lansing', location: { lat: 42.7342, lng: -84.5556 }, state: 'Michigan' },
  { name: 'St. Paul', location: { lat: 44.9494, lng: -93.0964 }, state: 'Minnesota' },
  { name: 'Jackson', location: { lat: 32.3222, lng: -90.1978 }, state: 'Mississippi' },
  { name: 'Jefferson City', location: { lat: 38.5642, lng: -92.1833 }, state: 'Missouri' },
  { name: 'Helena', location: { lat: 46.5933, lng: -112.0333 }, state: 'Montana' },
  { name: 'Lincoln', location: { lat: 40.8139, lng: -96.6789 }, state: 'Nebraska' },
  { name: 'Carson City', location: { lat: 39.1667, lng: -119.7667 }, state: 'Nevada' },
  { name: 'Concord', location: { lat: 43.2167, lng: -71.5556 }, state: 'New Hampshire' },
  { name: 'Trenton', location: { lat: 40.2217, lng: -74.7567 }, state: 'New Jersey' },
  { name: 'Santa Fe', location: { lat: 35.6861, lng: -105.9372 }, state: 'New Mexico' },
  { name: 'Albany', location: { lat: 42.6526, lng: -73.7562 }, state: 'New York' },
  { name: 'Raleigh', location: { lat: 35.7796, lng: -78.6382 }, state: 'North Carolina' },
  { name: 'Bismarck', location: { lat: 46.8083, lng: -100.7837 }, state: 'North Dakota' },
  { name: 'Columbus', location: { lat: 39.9612, lng: -82.9988 }, state: 'Ohio' },
  { name: 'Oklahoma City', location: { lat: 35.4676, lng: -97.5164 }, state: 'Oklahoma' },
  { name: 'Salem', location: { lat: 44.9429, lng: -123.0351 }, state: 'Oregon' },
  { name: 'Harrisburg', location: { lat: 40.2732, lng: -76.8867 }, state: 'Pennsylvania' },
  { name: 'Providence', location: { lat: 41.8236, lng: -71.4222 }, state: 'Rhode Island' },
  { name: 'Columbia', location: { lat: 34.0007, lng: -81.0348 }, state: 'South Carolina' },
  { name: 'Pierre', location: { lat: 44.3683, lng: -100.351 }, state: 'South Dakota' },
  { name: 'Nashville', location: { lat: 36.1627, lng: -86.7816 }, state: 'Tennessee' },
  { name: 'Austin', location: { lat: 30.2672, lng: -97.7431 }, state: 'Texas' },
  { name: 'Salt Lake City', location: { lat: 40.7608, lng: -111.891 }, state: 'Utah' },
  { name: 'Montpelier', location: { lat: 44.2601, lng: -72.5754 }, state: 'Vermont' },
  { name: 'Richmond', location: { lat: 37.5407, lng: -77.436 }, state: 'Virginia' },
  { name: 'Olympia', location: { lat: 47.0379, lng: -122.9007 }, state: 'Washington' },
  { name: 'Charleston', location: { lat: 38.3498, lng: -81.6326 }, state: 'West Virginia' },
  { name: 'Madison', location: { lat: 43.0731, lng: -89.4012 }, state: 'Wisconsin' },
  { name: 'Cheyenne', location: { lat: 41.140, lng: -104.8202 }, state: 'Wyoming' }
];

const ExplorePage = () => {
    const [selectedCapital, setSelectedCapital] = useState(null);
    const [expandedState, setExpandedState] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate
  
    // Use useEffect to check authentication status
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          navigate('/login');  // Redirect to login if not authenticated
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    const handleCapitalClick = (capital) => {
      console.log('Capital clicked:', capital);
      setSelectedCapital(capital);
    };
  
    const toggleState = (stateName) => {
      console.log('State toggled:', stateName);
      setExpandedState(expandedState === stateName ? null : stateName);
    };
  
    return (
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 overflow-y-auto py-16 md:py-0 md:pt-8"> {/* Added py-16 for padding */}
          <div className="text-center md:pl-3">
            <h2 className="text-2xl text-center font-semibold pl-3">Wanting to explore the places of United States? Do so here!</h2>
          </div>
          <br/>
          {states.map((state, index) => (
            <div key={state.name} className="border-b border-gray-200 p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleState(state.name)}
              >
                {state.number}. {state.name}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    expandedState === state.name ? 'transform rotate-180' : ''
                  }`}
                  color="rgb(25, 45, 394)"
                />
              </div>
              {expandedState === state.name && (
                <div className="pl-4 mt-2">
                  {capitals
                    .filter((capital) => capital.state === state.name)
                    .map((capital, capitalIndex) => (
                      <div
                        key={capital.name}
                        className="cursor-pointer py-2"
                        onClick={() => handleCapitalClick(capital)}
                      >
                        <div>
                          <p className='font-semibold inline-block'>Capital: </p> {capital.name}
                        </div>
                        <div>
                          <p className='font-semibold inline-block'>Latitude: </p> {capital.location.lat}
                        </div>
                        <div>
                          <p className='font-semibold inline-block'>Longitude: </p> {capital.location.lng}
                        </div>
                      </div>
                    ))}
                  {/* Add padding to create space */}
                  {index === states.length - 1 && <div style={{ paddingBottom: '2rem' }}></div>}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <LoadScript googleMapsApiKey="AIzaSyDpNYsaMtdkZHXXAR2uWLY9r2UtYL8ooqo">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={selectedCapital ? selectedCapital.location : center}
              zoom={selectedCapital ? 10 : 4}
            >
              {selectedCapital && <Marker position={selectedCapital.location} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  };
  
  export default ExplorePage;