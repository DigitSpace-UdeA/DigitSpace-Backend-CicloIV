import { gql } from 'apollo-server-express';

const typeDefs = gql`

    scalar Date

    enum Enum_Estado_Usuarios{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_Estado_Proyecto {
        ACTIVO
        INACTIVO
    }

    enum Enum_Fase_Proyecto {
        INICIADO
        EN_DESARROLLO
        TERMINADO
        NULO
    }
    
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        estado: Enum_Estado_Usuarios!
        rol: Enum_Rol!
    }

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicioProyecto: Date!
        fechaFinProyecto: Date!
        estado: Enum_Estado_Proyecto
        fase: Enum_Fase_Proyecto!
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
        ): Usuario

        editarUsuario(
            _id: ID!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            estado: Enum_Estado_Usuarios
        )
    
        eliminarUsuario(
            _id: String!, correo: String
        ): Usuario
    }
`;

export { typeDefs };