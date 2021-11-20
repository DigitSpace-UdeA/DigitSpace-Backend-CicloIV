import { resolversProyecto } from "../models/Proyectos/resolvers";
import { resolversUsuarios } from "../models/Usuarios/resolvers";
import { resolverAvances } from "../models/Avances/resolvers";

export const resolvers = [resolversProyecto, resolversUsuarios, resolverAvances];