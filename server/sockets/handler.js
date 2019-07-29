
const initHandlers = (io, context) => {

    io.on('connection', (client) => {
        console.log('Usuario conectado: ' + client.id);
    
        client.emit('saludar', {nombre: "server", saludo: `Bienvenido ${client.id}`});
    
        client.on('disconnect', () => {
            console.log('Usuario desconectado: ' + client.id);
        });
    
        client.on('saludar', (data, callback) => {
            console.log('Mensaje recibido de:', client.id);
            console.log('saludar:', data);

            client.broadcast.emit('saludar', data);

            if (callback) {
                let respuesta = data.nombre? `OK: ${data.nombre}` : "KO";
                callback(respuesta);
            }
        });
    });
    
};

module.exports = {
    initHandlers
}
