enum Enum_Rol {
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR",
}

enum Enum_Estado_Usuario {
    PENDIENTE = "PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO = "NO_AUTORIZADO",
}

enum Enum_Estado_Proyecto {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
}

enum Enum_Fase_Proyecto {
    INICIADO = 'INICIADO',
    EN_DESARROLLO = 'EN_DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = '',
}

enum Enum_Tipo_Objetivo{
    general = "General",
    especifico = "Específico",
}

enum Enum_Estado_Inscripcion {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada',
}

export { Enum_Rol, Enum_Estado_Usuario, Enum_Estado_Proyecto, Enum_Fase_Proyecto, Enum_Tipo_Objetivo, Enum_Estado_Inscripcion };