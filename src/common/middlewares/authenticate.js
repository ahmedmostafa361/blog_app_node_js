const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization; // "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided", success: false });
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET); /// jwt verify retrieved your data inside token = {id:1, name:'ka3bana'}
        req.userId = payload.id; // 👈 real numeric id from token payload
        /// const userId = payload.id
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token", success: false });
    }
};

module.exports = authenticate;