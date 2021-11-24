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
    filtrarAvance(idProyecto: String!): [Avance]
  }

  type Mutation {
    crearAvance(
      fechaAvance: Date!
      descripcion: String!
      proyecto: String!
      creadoPor: String!
    ): Avance
  }
`;

export { tiposAvances };