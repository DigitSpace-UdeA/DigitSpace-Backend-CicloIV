import { gql } from 'apollo-server-express';

const tiposEnum = gql`

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
`;

export { tiposEnum };