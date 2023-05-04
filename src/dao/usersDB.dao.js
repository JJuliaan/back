const UsersDao = require('./models/usersDB.model')
const Cart = require('./models/carts.model')

class UsuariosDB {
    constructor() { }

    async crearUsuario(usuario) {
        try {
            const { first_name, email, password } = usuario

            let role = 'usuario'
            if (email === 'admin@gmail.com' && password === 'admin') {
                role = 'administrador'
            }

            const newUsuarioInfo = {
                first_name,
                email,
                password,
                role
            }

            const user = await UsersDao.create(newUsuarioInfo)

            const cart = new Cart({
                userId: user._id
            })

            await cart.save()

            return user

        } catch (error) {
            return error
        }

    }
}

module.exports = UsuariosDB