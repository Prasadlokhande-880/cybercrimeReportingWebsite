const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const NormalSignup = require('./model/ModuleNormalUser');
const InternSignup = require('./model/ModuleInternUser');
const AdminSignup = require('./model/ModuleAdministration');

const app = express();
const port = 4200;
require('./MongoDB/MongoDbcon');

app.use(bodyParser.json());


app.listen(port, () => {
    console.log("Backend server is live at port 4200");
});


app.post("/signup", async (req, res) => {
    try {
        const { type } = req.body.type;
        let userModel;

        // Determine the user model based on the type
        switch (type) {
            case "normal":
                userModel = NormalSignup;
                break;
            case "intern":
                userModel = InternSignup;
                break;
            case "admin":
                userModel = AdminSignup;
                break;
            default:
                return res.status(400).json({ error: "Invalid user type" });
        }

        // Create a new user instance based on the determined model
        const newUser = new userModel(req.body);
        await newUser.save();

        // Return success message
        return res.status(201).json({ message: `${type} user signed up successfully` });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


// Login for all types of users
app.post("/login", async (req, res) => {
    try {
        const { emailAddress, password, type } = req.body;
        let user;

        // Determine the model based on the type of user
        switch (type) {
            case "normal":
                user = await NormalSignup.findOne({ emailAddress });
                break;
            case "intern":
                user = await InternSignup.findOne({ emailAddress });
                break;
            case "admin":
                user = await AdminSignup.findOne({ emailAddress });
                break;
            default:
                return res.status(400).json({ error: "Invalid user type" });
        }

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // You can return additional data if needed
        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/loginNormal", async (req, res) => {
    try {
        const { emailAddress, password } = req.body;
        const user = await NormalSignup.findOne({ emailAddress });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        // You can return additional data if needed
        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


// this is the code for the code for the profile
app.get("/ProfileUser", async (req, res) => {
    try {
        const ProfileUserData = await NormalUser.findOne({ name: userNameNormal });
        if (!ProfileUserData) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ message: "User found successfully", user: ProfileUserData });
    } catch (e) {
        console.log("There is an error:", e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
