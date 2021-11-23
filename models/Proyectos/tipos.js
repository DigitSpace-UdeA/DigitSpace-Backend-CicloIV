import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
    
    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo: Enum_Tipo_Objetivo!
    }

    input crearObjetivo{
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
        Proyectos: [Proyecto]
        Proyecto(_id: String!): Proyecto
    }

    type Mutation {
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

export { tiposProyecto };