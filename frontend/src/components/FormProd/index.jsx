import React from "react";
import * as yup from "yup";
import api from "../../services/api"
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Containe,
  FormContainer,
  InputArea,
  Label,
  Input,
  ErroMessage,
} from "./style";
import Button from "../Button";

function FormProduct() {
  const schema = yup.object({
    codigo: yup.number().required("Campo obrigatorio"),
    descricao: yup.string().required("Campo obrigatorio"),
    estoque: yup.number().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (produtos) => {
    try {
      const {data,status} = await api.post('cadastrar', {
        codigo:produtos.codigo,
        descricao:produtos.descricao,
        estoque:produtos.estoque
    },{validateStatus:()=>true})
    
    if(status === 200 || status === 201){
        toast.success("item criado")
    }else if(status === 409 || 500){
        toast.error('Verifique o codigo do produto')
    }else {
      throw new Error()
    }
    } catch (error) { 
        toast.error("erro no sistema mane")
    }
  };

  return (
    <>
      <Containe>
        <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
          <InputArea>
            <Label>Codigo</Label>
            <Input type="number" {...register("codigo")} />
            <ErroMessage>{errors.codigo?.message}</ErroMessage>
          </InputArea>

          <InputArea>
            <Label>Descrição</Label>
            <Input type="text" {...register("descricao")} />
            <ErroMessage>{errors.descricao?.message}</ErroMessage>
          </InputArea>

          <InputArea>
            <Label>Estoque</Label>
            <Input type="number" {...register("estoque")} />
            <ErroMessage>{errors.estoque?.message}</ErroMessage>
          </InputArea>

          <InputArea>
          <Button>Enviar</Button>
          </InputArea>
        </FormContainer>
      </Containe>
    </>
    //     <FormContainer >

    //     <form onSubmit={handleSubmit(onSubmit)}>
    //     <InputArea>
    //       <Label>Codigo</Label>
    //       <Input type="text" {...register("codigo")}/>
    //       <ErroMessage>{errors.email?.message}</ErroMessage>
    //     </InputArea>

    //     <InputArea>
    //       <Label>Descrição</Label>
    //       <Input type="text"  {...register("descricao")}  />
    //     </InputArea>

    //     <InputArea>
    //       <Label>Estoque</Label>
    //       <Input type="text"  {...register("estoque")} />
    //     </InputArea>

    //     <Button type="submit">Criar</Button>
    //     </form>

    //   </FormContainer>
  );
}

export default FormProduct;
