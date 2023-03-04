import React from "react";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  ContainerItens,
  Label,
  Input,
  ErroMessage,
  LinkP,
} from "./styles";

import Button from "../../components/Button";

function Register() {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().email("Email incorreto").required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "No mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatorio")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "create",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      );

      if (status === 201) {
        toast.success("Cadastro criado com sucesso");
      } else if (400 || 409) {
        toast.error("Email ja em uso");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha no sistema");
    }
  };

  return (
    <Container>
      <ContainerItens>
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            erro={errors.name?.message}
          />
          <ErroMessage>{errors.name?.message}</ErroMessage>

          <Label>Email</Label>
          <Input type="text" {...register("email")} />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Label>confirma senha</Label>
          <Input type="password" {...register("confirmPassword")} />
          <ErroMessage>{errors.confirmPassword?.message}</ErroMessage>

          <Button style={{ marginTop: 50 }}>Enviar</Button>
        </form>

        <LinkP>
          Ja possui uma conta ? <Link className="link-cor" to={"/login"}>sign In</Link>
        </LinkP>
      </ContainerItens>
    </Container>
  );
}

export default Register;
