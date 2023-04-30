import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

const StateContext=createContext({
    currentUser:{},
    userToken:null,
    surveys:[],
    questionTypes:[],
    setCurrentUser:()=>{},
    setUserToken:()=>{}
})


export const ContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser]=useState({});
  
    const [userToken,_setUserToken]=useState(localStorage.getItem('eyoo_token') || '');
  
    const setUserToken = (token) =>{
      if(token){
        localStorage.setItem("eyoo_token",token)
      }else{
        localStorage.removeItem('eyoo_token')
      }
      _setUserToken(token);
    }
    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);