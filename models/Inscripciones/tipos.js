import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estadoInscripcion: Enum_Estado_Inscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estadoInscripcion: Enum_Estado_Inscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };

// import { gql } from 'apollo-server-express';

// const tiposInscripcion = gql`
//   type Inscripcion {
//     _id: ID!
//     estado: Enum_EstadoInscripcion!
//     fechaIngreso: Date
//     fechaEgreso: Date
//     proyecto(lider: String): Proyecto
//     estudiante: Usuario!
//   }
//   type Query {
//     Inscripciones: [Inscripcion]
//   }
//   type Mutation {
//     crearInscripcion(proyecto: String!, estudiante: String!): Inscripcion
//     aprobarInscripcion(id: String!): Inscripcion
//   }
// `;

// export { tiposInscripcion };