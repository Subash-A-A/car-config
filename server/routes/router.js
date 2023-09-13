const express = require('express')
const router = express.Router();
const Signuptemplatecopy = require("../models/signupModel")
const bcrypt=require('bcrypt')

router.get('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Signuptemplatecopy.findOne({ username: username })
        .then(async existingUser => {
            if (existingUser!==null) {
                const result = await bcrypt.compare(password, existingUser.password);
                if (result) {
                    res.send("existing user");
                } else {
                    res.send("password wrong");
                }
            } else {
                res.send("no username found");
            }
        });
});

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    Signuptemplatecopy.findOne({ username:username,email: email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            const signupUser = new Signuptemplatecopy({
                username: username,
                email: email,
                password: password,
            });

            return signupUser.save();
        })
        .then(data => {
            res.json(data);
            console.log(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
        });
});


module.exports = router;