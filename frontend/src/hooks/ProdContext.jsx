import React, {createContext, useContext, useEffect, useState} from "react";

const ProdContext = createContext({})

export const ProdProvaider = ({children})=> {

    const [produtos,setProdutos] = useState([])
   
    async function addProdutos(prod){
        await localStorage.setItem('flex:userData',JSON.stringify(prod))
    }


    useEffect(()=>{
        async function loadUserData() {
            const clientCartData = await localStorage.getItem('flex:userData')
            if (clientCartData) {
                setProdutos(JSON.parse(clientCartData))
            }
        }
        loadUserData()

    },[])
    return (
        <ProdContext.Provider value={{addProdutos,produtos}}>
            {children}
        </ProdContext.Provider>
    )
}


export const useProd = () => {
    const context = useContext(ProdContext)

    if (!context) {
        throw new Error("useProd must be used with UserContext")
    }

    return context
}