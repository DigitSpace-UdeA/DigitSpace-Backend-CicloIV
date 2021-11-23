import { gql } from 'apollo-server-express';
import { tiposEnum } from '../models/Enums/tipos.js';
import { tiposUsuarios } from '../models/Usuarios/tipos.js';
import { tiposProyecto } from '../models/Proyectos/tipos.js';
import { tiposAvances } from '../models/Avances/tipos.js';

const tiposGlobales = gql`

    scalar Date
`;

export const tipos = [tiposGlobales, tiposEnum, tiposUsuarios, tiposProyecto, tiposAvances];