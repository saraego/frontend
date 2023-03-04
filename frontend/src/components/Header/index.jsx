import React from "react";
import { useUser} from "../../hooks/UserContext"
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify"

import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  PageLinkExit,
} from "./style";
function Header() {
  const {userData,logout} = useUser()
  const {push,location: { pathname }} = useHistory();

  function sair(){
        logout()
        push('/login')
        toast.success("Bye Bye")
 }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </PageLink>
        <PageLink onClick={() => push("/produtos")} isActive={pathname === "/produtos"}>
          Cadastrar Produtos
        </PageLink>
        <PageLink onClick={() => push("/lista")} isActive={pathname === "/lista"}>
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <p>Olá, {userData.name}</p>
        <div className="divisao"></div>

        <div className="ContainerText2">
          <PageLinkExit onClick={sair}>Sair</PageLinkExit>
        </div>
      </ContainerRight>
    </Container>
  );
}

export default Header;
