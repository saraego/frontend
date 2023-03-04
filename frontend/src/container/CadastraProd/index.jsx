import React from "react";
import FormProduct from "../../components/FormProd";
import { Container } from "./styles";

function Produtos() {
    return (
       <Container>
            <h1>Cadastrar produtos</h1>
            <FormProduct/>
       </Container>
    )
}

export default Produtos