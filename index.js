const metodos = require('./moduloCRUD');

metodos.crearPropiedad({
    name: "Casa de playa",
    summary: "Casa de playa en Cancún",
    bedrooms: 4,
    bathrooms: 2 
})

// metodos.buscarPropiedad("Casa de playa")
// metodos.actualizarPropiedad("Casa de playa","casa uwu")
// metodos.eliminarPropiedad("Casa de playa")