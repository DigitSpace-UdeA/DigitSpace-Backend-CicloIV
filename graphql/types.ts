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

    enum Enum_Tipo_Objetivo{
        GENERAL
        ESPECIFICO
    }
    
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        rol: Enum_Rol!
        estado: Enum_Estado_Usuarios
    }

    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo: Enum_Tipo_Objetivo!
    }

    input crearObjetivo{
        _id: ID
        descripcion: String!
        tipo: Enum_Tipo_Objetivo!
    }

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicial: Date!
        fechaFinal: Date!
        estado: Enum_Estado_Proyecto!
        fase: Enum_Fase_Proyecto!
        lider: Usuario!
        objetivos: [Objetivo]
    }
  
    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
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
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_Rol!
            estado: Enum_Estado_Usuarios
        ): Usuario
    
        eliminarUsuario(
            _id: String!, correo: String
        ): Usuario

        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicial: Date!
            fechaFinal: Date!
            estado: Enum_Estado_Proyecto!
            fase: Enum_Fase_Proyecto!
            lider: String!
            objetivos: [crearObjetivo]
        ): Proyecto
    }
`;

export { typeDefs };