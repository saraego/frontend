import React from "react";
import PropTypes from "prop-types"
import { UserProvider } from "./UserContext"

function AppProvider({ children }) {

    return (
        <UserProvider>
           
                {children}
            
        </UserProvider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider

