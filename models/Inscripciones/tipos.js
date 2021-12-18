import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estadoInscripcion: Enum_Estado_Inscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto(lider: String): Proyecto
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };