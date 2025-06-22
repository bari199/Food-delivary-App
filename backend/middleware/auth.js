import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Fix: ensure req.body exists
    req.body = req.body || {};
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log("Auth error:", error.message);
    res.json({ success: false, message: "Token verification failed." });
  }
};

export default authMiddleware;
