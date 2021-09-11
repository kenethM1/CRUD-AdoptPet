const jwt = require("jsonwebtoken");
const Usuario = require('../model/usuario');
const config = require("../config");

exports.signupController = async (req, res) => {
    try {
        // Receiving Data
        const { nombreUsuario, correo, password, telefono, direccion, nombres } = req.body;
        // Creating a new User
        const idUsuario = new Date().getUTCMilliseconds();
        const user = new Usuario({
            idUsuario,
            nombreUsuario,
            correo,
            password,
            telefono,
            direccion,
            nombres
        });
        // encrypt the user's password
        user.password = await user.encryptPassword(password);

        await user.save();

        // Create a Token
        const token = jwt.sign({ id: user.idUsuario }, config.secret, {
            expiresIn: 60 * 60 * 24, // expires in 24 hours
        });

        res.json({ auth: true, token });
    } catch (e) {
        console.log(e);
        res.status(500).send("There was a problem registering your user");
    }
};

exports.getProfile = async (req, res) => {
    const user = await Usuario.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).send("No user found.");
    }
    res.status(200).json(user);
};

exports.signinController = async (req, res) => {
    const user = await Usuario.findOne({ nombreUsuario: req.body.usuario });
    if (!user) {
        return res.status(401).send({ auth: false, message: "No existe usuario." });
    }
    const validPassword = await user.comparePassword(
        req.body.password,
        user.password
    );
    if (!validPassword) {
        return res.status(401).send({ auth: false, token: null });
    }
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24,
    });
    res.status(200).json({ auth: true, token });
};

exports.logout = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
};