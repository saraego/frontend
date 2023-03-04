import React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "./UserContext";
import { ProdProvaider } from "./ProdContext";

function AppProvider({ children }) {
  return (
    <UserProvider>
         <ProdProvaider>
            {children}
        </ProdProvaider>
    </UserProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
