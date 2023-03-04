import React from "react";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  ContainerItens,
  Label,
  Input,
  ErroMessage,
  LinkP,
} from "./styles";
import { useUser } from "../../hooks/UserContext";

import Button from "../../components/Button";

function Login() {
  const {push} = useHistory()
  const {putUsetData,userData} = useUser()
  console.log(userData);

  const schema = yup.object({
    email: yup.string().email("Email incorreto").required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "No mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("login", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Verifique seu Email ou Senha",
      }
    );

    putUsetData(data)

    setTimeout(()=>{
      push('/')
    },1500)
   
  };

  return (
    <Container>
      <ContainerItens>
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="text" {...register("email")} />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Button style={{ marginTop: 50 }}>Enviar</Button>
        </form>

        <LinkP>
          Não possui uma conta ?{" "}
          <Link className="link-cor" to={"/registro"}>
            sign Up
          </Link>
        </LinkP>
      </ContainerItens>
    </Container>
  );
}

export default Login;
