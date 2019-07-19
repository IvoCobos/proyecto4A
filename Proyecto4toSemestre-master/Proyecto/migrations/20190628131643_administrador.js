;
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('administrador')
    .createTable( 'personas', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('nombre1').notNullable().unique();
        t.string('nombre2').notNullable().unique();
        t.string('apellido1').notNullable().unique();
        t.string('apellido2').notNullable();
        t.string('direccion').notNullable();
        t.string('telefono').notNullable().unique();
        t.string('email').notNullable();
        t.string('password').notNullable();
    })
    .createTable( 'productos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable().unique();
        t.string('tiempoTatto').notNullable();
        t.string('costo').notNullable();
    })
    .createTable( 'reservas', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.integer('idCliente').notNullable();
        t.integer('idProducto').notNullable();
        t.string('fechaPedido').notNullable();
        t.string('fechaReserva').notNullable();
        t.bool('enfermedad').notNullable();
        
    } )
    .createTable( 'empleados', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.integer('idPersona').notNullable();
        t.integer('idRol').notNullable();
        
    } )
    .createTable( 'roles', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.string('descripcion').notNullable();
        
    } )
    .createTable( 'clientes', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.integer('idPersona').notNullable().unique();
        
    } )
    .createTable( 'imagenTattos', function( t ) {

        // Primary Key
        t.increments('id');

        // Data
        t.integer('idProducto').notNullable();
    
    } );
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('administrador')
        .dropTableIfExists( 'personas' )
        .dropTableIfExists( 'productos' )
        .dropTableIfExists( 'reservas' )
        .dropTableIfExists( 'empleados' )
        .dropTableIfExists( 'clientes' )
        .dropTableIfExists( 'roles' )
        .dropTableIfExists( 'imagenTattos' )
};
