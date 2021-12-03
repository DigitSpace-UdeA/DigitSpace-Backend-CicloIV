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
    filtrarAvance(_id: String!): [Avance]
    filtrarAvanceEstudiante(_id: String!): [Avance]
  }

  type Mutation {
    crearAvance(
      fechaAvance: Date!
      descripcion: String!
      proyecto: String!
      creadoPor: String!
    ): Avance

    editarAvance(_id: ID!, descripcion: String!): Avance

    editarObservacionesAvance(_id: ID!, observacion: String!): Avance
  }
`;

export { tiposAvances };