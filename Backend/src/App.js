const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const NormalUser= require("./model/ModuleNormalUser");
const NormalIntern= require("./model/ModuleInternUser");
const NormalUserAdministration= require("./model/ModuleAdministration");

const app = express();
const port = 4200;
require('./mongo.jsx/mongoDBcont');

app.use(bodyParser.json());

// this is the function for the for the signUp

