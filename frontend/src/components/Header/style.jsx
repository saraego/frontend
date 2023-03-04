import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${prod => prod.isActive ? "blue" : "#555" };
  font-weight: ${prod => prod.isActive ? "700" : "400" };
  font-size: 16px;
  line-height: 19px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

    p {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #555555;
    }

  .divisao {
    height: 40px;
    border-right: 2px solid #ccc;
  }

 
`;

export const PageLinkExit = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: blue;
`;
