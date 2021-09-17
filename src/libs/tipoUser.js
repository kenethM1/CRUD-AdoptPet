const { verify } = require('jsonwebtoken');
const userModel = require('../model/usuario');

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() 
        const tokenData = await verifyToken(token)
        const userData = await userModel.findById('538') 

        
        if ([].concat(roles).includes(userData.tipoUsuario)) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Acceso denegado' })
    }

}

module.exports = checkRoleAuth