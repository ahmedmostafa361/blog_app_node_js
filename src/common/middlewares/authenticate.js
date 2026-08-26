const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization; // "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided", success: false });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // 👈 real numeric id from token payload
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token", success: false });
    }
};

module.exports = authenticate;