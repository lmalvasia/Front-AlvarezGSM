import jwt from "jsonwebtoken";

export default function jwtCheck() {
  const token = localStorage.getItem("user");
  if (token) {
    const decodedToken = jwt.decode(token);
    const now = new Date();
    if (now.getTime() < decodedToken.exp * 1000) {
      return true;
    } else {
      return false;
    }
  }
}
