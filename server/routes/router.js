const express = require("express");
const router = express.Router();
const Signuptemplatecopy = require("../models/signupModel");
const carDetailsTempalate = require("../models/CarModel");
const orderDetailsTempalate = require("../models/CarOrder");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.json({ message: "ok" });
});

router.post("/order", (req, res) => {
  const orderData = new orderDetailsTempalate({
    username: req.body.username,
    orderNo: req.body.orderNo,
    paymentStatus: req.body.paymentStatus,
    modelName: req.body.modelName,
    bodyColor: req.body.bodyColor,
    tireColor: req.body.tireColor,
    rimColor: req.body.rimColor,
    lineColor: req.body.lineColor,
  });
  orderData
    .save()
    .then((data) => {
      res.status(200).json(data);
      console.log("Added to cart: " + data);
    })
    .catch((err) => {
      res.status(400).send({
        message: "cannot save in DB",
        error: err,
      });
    });
});

router.post("/cardata", (req, res) => {
  const carData = new carDetailsTempalate({
    username: req.body.username,
    modelName: req.body.modelName,
    bodyColor: req.body.bodyColor,
    tireColor: req.body.tireColor,
    rimColor: req.body.rimColor,
    lineColor: req.body.lineColor,
  });
  carData
    .save()
    .then((data) => {
      res.status(200).json(data);
      console.log("Saved Car Configuration: " + data);
    })
    .catch((err) => {
      res.status(400).send({
        message: "cannot save in DB",
      });
    });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req);
  Signuptemplatecopy.findOne({ username: username }).then(
    async (existingUser) => {
      if (existingUser !== null) {
        const result = await bcrypt.compare(password, existingUser.password);
        if (result) {
          res.status(200).send("existing user");
        } else {
          res.status(400).send("password wrong");
        }
      } else {
        res.status(400).send("no username found");
      }
    }
  );
});

// router.get("/signup", (req, res) => {
//   console.log("signup");
// });

router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  let ex = false;
  Signuptemplatecopy.findOne({ username: username, email: email })
    .then((existingUser) => {
      if (existingUser) {
        ex = true;
        return res.status(200).json({ error: "Email already exists" });
      }
      const signupUser = new Signuptemplatecopy({
        username: username,
        email: email,
        password: password,
      });

      signupUser.save();
    })
    .then((data) => {
      if (!ex) res.status(200).json(data);
      console.log(data);
    })
    .catch((err) => {
      // res.send("An error occurred");
      // res.json({ error: "An error occurred", status: 400 });
    });
});

router.post("/cartCount", (req, res) => {
  orderDetailsTempalate
    .find({ username: req.body.username })
    .then((data) => {
      res.status(200).json({ count: data.length });
      console.log(data.length);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
