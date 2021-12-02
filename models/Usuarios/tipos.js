import { gql } from 'apollo-server-express';

const tiposUsuarios = gql`
       
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_Estado_Usuarios
    }
  
    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!            
            rol: Enum_Rol!
            estado: Enum_Estado_Usuarios
            password: String!
        ): Usuario

        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_Estado_Usuarios!
        ): Usuario
    
        eliminarUsuario(
            _id: String!, correo: String
        ): Usuario
    }
`;

export { tiposUsuarios };