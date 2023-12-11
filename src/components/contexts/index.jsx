import React, { useState, useContext, createContext } from "react"


const RatingFilterContext = createContext()

export const RatingFilterProvider = ({ children }) => {
  const [filteredShows, setFilteredShows] = useState([]);

  return (
    <RatingFilterContext.Provider value={{ filteredShows, setFilteredShows }}>
      {children}
    </RatingFilterContext.Provider>
  );
};

export const useRatingFilter = () => useContext(RatingFilterContext)





const ShowContext = createContext()

export const ShowProvider = ({ children }) => {
  const [showData, setShowData] = useState([])

  return (
    <ShowContext.Provider value={{ showData, setShowData }}>
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => useContext(ShowContext)




const StatusContext = createContext()

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState("")

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => useContext(StatusContext)





