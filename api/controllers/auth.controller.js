const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model.js");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("Login function called");

    if (!admin)
      return res.status(404).send("Error: Email or Password incorrect");
    const comparePass = bcrypt.compareSync(req.body.password, admin.password);

    if (comparePass) {
      const payload = { email: admin.email };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
      return res.status(200).send({ token, role: admin.role });
    } else {
      return res.status(404).json("Error: Email or Password incorrect");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// async function signup(req, res) {
//   const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
//   const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
//   req.body.password = bcrypt.hashSync(
//     req.body.password,
//     bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
//   );

//   try {
//       console.log(req.body)
//       const newUser = await Admin.create(req.body);
//     const payload = { email: newUser.email };
//     const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
//     return res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).send("error");
//   }
// }
async function signup(req, res) {
  try {
    const saltRounds = parseInt(process.env.SALTROUNDS);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;

    console.log(req.body);

    const newUser = await Admin.create(req.body);
    const payload = { email: newUser.email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during signup");
  }
}

module.exports = { signup, login };
