import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_Tipo_Objetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_Tipo_Objetivo!
  }

  input camposObjetivo {
    descripcion: String!
    tipo: Enum_Tipo_Objetivo!
  }

  input camposProyecto {
    nombre: String
    presupuesto: Float
    fechaInicial: Date
    fechaFinal: Date
    estadoProyecto: Enum_Estado_Proyecto
    faseProyecto: Enum_Fase_Proyecto
    lider: String
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicial: Date
    fechaFinal: Date
    estadoProyecto: Enum_Estado_Proyecto
    faseProyecto: Enum_Fase_Proyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
    Proyecto_Lider(lider: String!): [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      estadoProyecto: Enum_Estado_Proyecto
      faseProyecto: Enum_Fase_Proyecto
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

    editarProyecto(_id: String!, campos: camposProyecto!): Proyecto

    crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto

    editarObjetivo(
      idProyecto: String!
      indexObjetivo: Int!
      campos: camposObjetivo!
    ): Proyecto

    eliminarObjetivo(
      idProyecto: String!
      idObjetivo: String!
    ): Proyecto
  }
`;

export { tiposProyecto };