
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.imagenTattos').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.imagenTattos').insert([
        {idProducto: '1'}
      ]);
    });
};
