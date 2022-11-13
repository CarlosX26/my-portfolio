import * as yup from "yup";

export const schemaContact = yup.object({
  name: yup.string().required("Insira seu nome"),
  email: yup.string().required("Insira seu email").email("Email inválido"),
  message: yup.string().required("Insira uma mensagem"),
});
