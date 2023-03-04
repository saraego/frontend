import React, { useEffect, useState } from "react";
import Lista from "../../components/ListaPro";
import api from "../../services/api";
import { Container } from "./style";

function ListaProdutos() {

  


  return (
    <>
      <Container>
        <h1>Lista produtos</h1>
        <Lista/>
      </Container>
    </>
  );
}

export default ListaProdutos;
