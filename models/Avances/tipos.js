import { gql } from 'apollo-server-express';

const tiposAvances = gql`
       
    type Avance {
        _id: ID!
        fechaAvance: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }
  
    type Query {
        Avances: [Avance]
    }

    type Mutation {
        crearAvance(
            fechaAvance: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ): Avance

        filtrarAvance(
            idProyecto: String!
        ): [Avance]
    }
`;

export { tiposAvances };