import { resolversProyecto } from "../models/Proyectos/resolvers.js";
import { resolversUsuarios } from "../models/Usuarios/resolvers.js";
import { resolverAvances } from "../models/Avances/resolvers.js";

export const resolvers = [resolversProyecto, resolversUsuarios, resolverAvances];