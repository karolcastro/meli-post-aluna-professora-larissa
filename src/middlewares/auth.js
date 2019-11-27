const jwt = require("jsonwebtoken");// em relacaoao token, o token fica aqui
const authConfig = require("../config/auth");//requisicao da pasta
const { promisify } = require("util");//

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;// intercepta as requisicoes para verificar se foi ou nao passado um token
  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split("");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token!" });
  }
};
