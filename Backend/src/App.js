const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const NormalSignup = require('./model/ModuleNormalUser');
const InternSignup = require('./model/ModuleInternUser');
const AdminSignup = require('./model/ModuleAdministration');
const Case = require("./model/Moduleform");

const cors = require('cors');

const app = express();
const port = 4200;
require('./MongoDB/MongoDbcon');

app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => {
    console.log("Backend server is live at port 4200");
});



app.post("/api/signup", async (req, res) => {
    try {
        const data = req.body;
        let userModel;
        type=data.type

        console.log(data);
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


var userName='';
var UserType='';

// Login for all types of users
app.post("/login", async (req, res) => {
    try {
        const { email, password, type } = req.body; // Extract email, password, and type from request body
        console.log(req.body);

        let user;
        userName=email;
        UserType=type;

        // Determine the model based on the type of user
        switch (type) {
            case "normal":
                user = await NormalSignup.findOne({ email });
                break;
            case "intern":
                user = await InternSignup.findOne({ email });
                console.log("found the user", email);
                break;
            case "admin":
                user = await AdminSignup.findOne({ email });
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

// this is the code for the get user type

app.get("/UserType", async (req, res) => {
    try {
        res.status(200).json({ message: "success", type: UserType });
    } catch (error) {
        console.log("User Type Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// this is the code for the user email

app.get("/UserName", async (req, res) => {
    try {
        res.status(200).json({ message: "success", name:userName});
        console.log(userName);
    } catch (error) {
        console.log("User Type Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
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

//this is the code for the code for the E-filing

app.post("/efiling", async (req, res) => {
    try {
       const data = req.body;
       data.UserEmail=userName;

       const newUser = new Case(data);
       await newUser.save();
       res.status(200).send("Data received successfully");
    } catch (error) {
       console.log("There is an error in efiling:", error);
       res.status(500).send("Internal server error");
    }
 });

 // get all the data from the backend

<<<<<<< Updated upstream
=======
 userName="Prasad.lokhande@mitaoe.ac.in";

>>>>>>> Stashed changes
app.get("/getallefiling", async (req, res) => {
    try {
      const allCases = await Case.find({UserEmail:userName});
      res.status(200).json(allCases);
    } catch (error) {
      console.error("Error in getAllEfiling:", error);
      res.status(500).send("Internal server error");
    }
});


// this is the for the giving the Profile information

app.get("/profile", async (req, res) => {
    try{
        const userinformation = await NormalSignup.findOne({email:userName});
        res.status(200).json(userinformation);
    }
    catch(error){
        console.log("this is the error for the server:",error);
    }
})

app.put("/update", async (req, res) => {
    try {
        const updatedUserInfo = req.body;
        console.log("Received updated user info:", updatedUserInfo);
        res.status(200).json({ message: "User profile updated successfully" });
    } catch (error) {
        console.log("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// this is the code for the intern to get all the cases

app.get("/getallefiling", async (req, res) => {
    try {
      const allCases = await Case.find({UserEmail:userName});
      res.status(200).json(allCases);
    } catch (error) {
      console.error("Error in getAllEfiling:", error);
      res.status(500).send("Internal server error");
    }
})