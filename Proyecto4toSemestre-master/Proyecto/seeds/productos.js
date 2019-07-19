
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.productos').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.productos').insert([
        {descripcion: 'Hola', tiempoTatto: '60min', costo: '20.00'}
      ]);
    });
};
