import { gql } from 'apollo-server-express';

const typeDefs = gql`

    enum Enum_Estado_Usuarios{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    
    
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        estado: Enum_Estado_Usuarios!
    }
  
    type Query {
        Usuarios: [Usuario]
    }
`;

export { typeDefs };