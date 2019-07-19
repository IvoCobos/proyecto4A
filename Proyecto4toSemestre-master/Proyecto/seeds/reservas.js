
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrador.reservas').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrador.reservas').insert([
        {idCliente: '1', idProducto: '1', fechaPedido: '2019-05-10', fechaReserva: '2019-06-29', enfermedad: true} 
      ]);
    });
};
