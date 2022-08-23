import { createContext, useState } from "react";

import { CarData } from "../data/CarData";
import { MessageData } from "../data/MessageData";

export const CarCtx = createContext({
  message:MessageData,
  cars: CarData,
  id:[],
  addLiked: (id) => { },
  removeLiked:(id)=>{}
})


const CarAppProvider = ({children}) => {
  const [favId, setFavId] = useState([])
  
  const addLiked = (id) => {
    setFavId(cur => [...cur, id])
  }
  const removeLiked = (id) => {
    setFavId((cur) => cur.filter(item => item !== id))
  
  }
  const value = {
    message:MessageData,
    cars: CarData,
    favId,
    addLiked,
    removeLiked,
}
  return <CarCtx.Provider value={value}>
 {children}
  </CarCtx.Provider>
}

export default CarAppProvider