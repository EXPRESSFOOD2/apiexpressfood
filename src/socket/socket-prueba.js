module.exports = (io)=>{

    io.on('connection', (socket)=>{
        console.log('a user connected' + socket.id);

        socket.on('prueba',(data, cb)=>{
            console.log(data);
            cb()
        })
    });

}