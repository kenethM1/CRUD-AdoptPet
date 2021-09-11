const jwt = require("jsonwebtoken");
const defaultConfig = require("../config");

exports.verifyToken = async (req, res, next) => {
    // Get the token from the headers
    const token = req.headers["x-access-token"];

    // if does not exists a token
    if (!token) {
        return res
            .status(401)
            .send({ auth: false, message: "No Token aws Provided" });
    }

    // decode the token
    try {
        const decoded = await jwt.verify(token, defaultConfig.secret);
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        return res.status("404").json({ "Auth": "No functional token" });
    }



}
