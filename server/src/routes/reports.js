let express = require('express');

let projectReport = require("../models/projectReport");
let userReport = require("../models/userReport");


let router = express.Router();

router.get('/project', async (req, res, next) => {
    const projects = await projectReport.find()
    res.status(200).send(projects)
});

router.get('/user', async (req, res, next) => {
    const users = await userReport.find()
    res.status(200).send(users)
});


module.exports = router;