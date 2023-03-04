import React from "react";
import { Container, Table, Tbody, Th, Thead, Tr } from "./style";
function ListaProdutos() {
  return (
    <>
      <Container>
        <h1>Lista produtos</h1>
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
            {
                
            }
          </Tbody>
        </Table>
      </Container>
    </>
  );
}

export default ListaProdutos;
