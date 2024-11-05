import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Kullanıcı modelini içe aktarın

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);


    const user = await User.findById(decoded.id).select("-password"); // Şifreyi dışarıda bırak
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = user; // Doğrulanan kullanıcıyı isteğe ekleyin
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;
