import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ContainerItens = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  width: 26vw;
  height: 500px;
  background-color: #e5e5e5;
  box-shadow: 0 10px 10px #ccc;

  h1 {
    text-align: center;
    color: #000;
    margin-top: 20px;
  }
`;

export const Label = styled.p`
  margin-top: 15px;
  margin-bottom: 3px;
`;
export const Input = styled.input`
  margin-left: 20px;
  height: 32px;
  width: 80%;
  padding-left: 10px;
  border-radius: 10px;
  /* outline: none; */
  border: ${(props) => (props.erro ? "1px solid red" : "none")};
`;

export const ErroMessage = styled.p`
  margin-left: 20px;
  color: red;
  font-size: 15px;
`;

export const LinkP = styled.p`
  margin-top: 30px;
  text-align: center;
  .link-cor {
    font-weight: 500;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
`;
