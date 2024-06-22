const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        const token = JSON.parse(req.headers.authorization.split(" ")[1]);
        const verifiedtoken = jwt.verify(token, "scaler_BMS");
        req.body.userId = verifiedtoken.userId
        next()
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Unauthorized"
        });
    }
}
