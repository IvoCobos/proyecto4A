
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.roles').insert([
        {descripcion: 'Hola'}
      ]);
    });
};
