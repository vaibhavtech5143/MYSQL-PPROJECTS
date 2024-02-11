import  {db}  from "../db.js";
import bcrypt from 'bcryptjs';
export const registerController = (req, res) => {
    //Registereing UserController
    //Checking Exisitng User

    const q = "SELECT * FROM users WHERE email=? OR username=?";
    // const values = [req.body.email,req.body.username];

    // console.log(values);
    // res.json(values);

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) res.json(err);
        if (data.length) return res.status(409).json("User ALready Exists");

        //Hashing The Password And Create A New User
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values],(err, data) => {
        if (err) res.json(err);
        return res.status(200).json("User Created")

        });
        res.json({ message: "User Created" });
        res.json(values);
    })


    // req.body = {name,email,password}
    res.json(req.body)
    console.log("register controller")
}















export const loginController = (req, res) => {

    // req.body = {name,email,password}
    res.json("Auth Controller")
    console.log("register controller")
}
export const logoutController = (req, res) => {

    // req.body = {name,email,password}
    res.json("Auth Controller")
    console.log("register controller")
}