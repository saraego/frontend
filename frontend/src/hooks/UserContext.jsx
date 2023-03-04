import React, { createContext, useContext, useEffect, useState } from "react"; //createCOntext = criar o context e o userContexte = distribuir context, para aplicação
import PropTypes from "prop-types"

const UseContext = createContext({}) // criamos uma variavel que ira receber o createContext com um objeto vazio

export const UserProvider = ({ children }) => {// depois criamos uma função que ira guardas e gerar novas informações, essa mesma função, sera sempre importada, para encapula as rotas ou algo que queremos dividi a informção

    const [userData, setUserData] = useState({})//criamos o useState para criar e guarda as informações do usuario


    async function putUsetData(userInfor) {//criamos a função putuserData, para recolher os dados do usuarios
        setUserData(userInfor)//aqui estamos enviando a informação que vem de login, 
        await localStorage.setItem('flex:userData', JSON.stringify(userInfor))//aqui estamos criando um novo dado para o localstorage, fica as informções do usuario logado
    }
    

    //desloga usuario...
    const logout = async () =>{
        await localStorage.removeItem('flex:userData')//aqui estamos excluindo as informações criada pelo localstorage
    }


    useEffect(() => {//o useEfect, é um efeito colateral, toda vez que a pagina é iniciada, ele tras alguma informação, aqui estamos retornado as informações do usuarios
        async function loadUserData() {//criamos uma função async , dentro iremos busca o localsotarege que estiver dentro do codeburgue:userData
            const clientInfor = await localStorage.getItem('flex:userData')
            if (clientInfor) {
                setUserData(JSON.parse(clientInfor))
            }
        }
        loadUserData()
    }, [])


    return (//aqui estamos retornado todas as informações, todos os metados que ciramos, devemos por dentro de value, assim outros aquivos, podem usalos
        <UseContext.Provider value={{ putUsetData, userData,logout }}>
            {children}
        </UseContext.Provider>
    )
}


export const useUser = () => {//o useUser é o resposavel de cria o caminho... com ele que nos podemos usar os metados , devemos importalo, e depois usar 
    const context = useContext(UseContext)

    if (!context) {
        throw new Error("useUser must be used with UserContext")
    }

    return context
}


UserProvider.propTypes = {
    children: PropTypes.node
}

