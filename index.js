const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3002;
const Seed = require("./src/seeds/index");
// const { Server } = require('socket.io')

//! importamos las funciones sockets


// const socketPrueba = require("./src/socket/socket-prueba");


// Syncing all the models at once.
/*
conn.sync({alter: true}).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});

*/
// const io = new Server(server,{
//   cors: {
//     origin: process.env.SOCKET_ALLOW_ORIGINS_LOCAL || process.env.SOCKET_ALLOW_ORIGINS_DEPLOY
//   }
// })

// socketPrueba(io)

conn.sync({force:true})
    .then(() => {
        return Seed();
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
        });
    });
