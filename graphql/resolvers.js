import { resolversProyecto } from "../models/Proyectos/resolvers.js";
import { resolversUsuarios } from "../models/Usuarios/resolvers.js";
import { resolverAvances } from "../models/Avances/resolvers.js";
import { resolverInscripciones } from "../models/Inscripciones/resolvers.js";
import { resolverAutenticacion } from "./auth/resolvers.js";

export const resolvers = [resolversProyecto, resolversUsuarios, resolverAvances, resolverInscripciones, resolverAutenticacion];