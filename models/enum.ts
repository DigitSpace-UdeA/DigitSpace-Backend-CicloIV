enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Líder",
    administrador = "Administrador",
}

enum Enum_Estado_Usuario {
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No Autorizado",
}

enum Enum_Estado_Proyecto {
    activo = 'Activo',
    inactivo = 'Inactivo',
}

enum Enum_Fase_Proyecto {
    iniciado = 'Iniciado',
    en_desarrollo = 'En Desarrollo',
    terminado = 'Terminado',
    null = '',
}

export { Enum_Rol, Enum_Estado_Usuario, Enum_Estado_Proyecto, Enum_Fase_Proyecto };