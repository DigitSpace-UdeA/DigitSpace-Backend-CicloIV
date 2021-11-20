import { gql } from 'apollo-server-express';
import { tiposEnum } from '../models/Enums/tipos';
import { tiposUsuarios } from '../models/Usuarios/tipos';
import { tiposProyecto } from '../models/Proyectos/tipos';
import { tiposAvances } from '../models/Avances/tipos';

const tiposGlobales = gql`

    scalar Date
`;

export const tipos = [tiposGlobales, tiposEnum, tiposUsuarios, tiposProyecto, tiposAvances];