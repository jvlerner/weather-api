import { createContext, useState } from 'react'

const LocationContext = createContext({})

const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState('São Paulo')
  
    return (
        <LocationContext.Provider
            value={{
                location,
                setLocation
            }}
        >
            { children }
        </LocationContext.Provider>
    )
}

export { LocationProvider, LocationContext }