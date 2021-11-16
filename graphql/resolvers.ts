const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = [
        {
          nombre: 'Karen',
        },
        {
          nombre: 'Kevin',
        },
        {
          nombre: 'Daniel',
        },
      ];

      return usuarios;
    },
  },
};

export { resolvers };