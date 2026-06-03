const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      console.log("TOKEN:", token);
      console.log("JWT_SECRET:", process.env.JWT_SECRET);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("DECODED:", decoded);

      req.user = decoded.id;

      next();
    } catch (error) {
      console.log("JWT ERROR:", error);

      return res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      message: "Not authorized, no token",
    });
  }
};

module.exports = { protect };