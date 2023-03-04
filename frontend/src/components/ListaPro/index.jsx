import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, Table, Tbody, Td, Th, Thead, Tr } from "./styles";

function Lista() {
  const [prodis, setProdis] = useState([]);

  useEffect(()=>{
    api.get("listar").then(async ({data}) => {
      await setProdis(data)
      console.log(data)
    })
  },[setProdis])

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Codigo</Th>
            <Th>Descrição</Th>
            <Th onlyWeb>Estoque</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {prodis.map((produ) => (
            <tr key={produ.id}>
              <td>{produ.estoque}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}

export default Lista;
