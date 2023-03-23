const socket = io()

socket.on('listProducts', products => {
    console.log(products);
})