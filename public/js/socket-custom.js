var socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});

socket.on('saludar', function(data) {
    console.log(data);
});

function requestReply(command, data) {
    return new Promise(function (resolve, reject) {
        socket.emit(command, data, function replyFunc(resp) {
            resolve(resp);
        });
    });
}
