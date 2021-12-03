import { gql } from "apollo-server-express";

const tiposAutenticacion = gql`
  type Token {
    token: String
    error: String
  }

  type Mutation {
    registrarUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_Estado_Usuarios
      password: String!
    ): Token!

    login(correo: String!, password: String!): Token

    refreshToken: Token
  }
`;

export { tiposAutenticacion };
