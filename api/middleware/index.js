const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");
const User = require("../models/user.model");

function checkAuth(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Token not found");

  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid");

      const user = await User.findOne({ where: { email: result.email } });
      const admin = await Admin.findOne({ where: { email: result.email } });

      if (user) {
        res.locals.user = user;
        next();
      } else if (admin) {
        res.locals.admin = admin;
        next();
      } else {
        return res.status(401).send("Token not valid");
      }
    }
  );
}

function checkAdmin(req, res, next) {
  if (!res.locals.admin || res.locals.admin.role !== "admin") {
    return res.status(401).send("Not authorized");
  } else {
    next();
  }
}


// function checkAuth(req, res, next) {
//   if (!req.headers.authorization)
//     return res.status(401).send("Token not found");

//   jwt.verify(
//     req.headers.authorization,
//     process.env.SECRET,
//     async (err, result) => {
//       if (err) return res.status(401).send("Token not valid");

//       const admin = await Admin.findOne({
//         where: { email: result.email },
//       });
//       if (!admin) return res.status(401).send("Not found");

//       res.locals.admin = admin;

//       next();
//     }
//   );
// }

// function checkAdmin(req, res, next) {
//   if (res.locals.admin.role !== "admin") {
//     return res.status(401).send("Not authorized");
//   } else {
//     next();
//   }
// }

module.exports = { checkAuth, checkAdmin };
