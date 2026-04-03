const express = require("express");
const conn = require("../db/conn");

const route = express.Router();


route.get("/", (req, res) => {
  const getAllUsersQuery = "SELECT * FROM `users`";

  conn.query(getAllUsersQuery, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Failed to get All users", err });
    } else {
      res.status(200).json({ message: "All users alived", result });
    }
  });
});

route.get("/:id", (req, res) => {
  const { id } = req.params;

  const singleUserQuery = `SELECT * FROM users WHERE user_id = ${id}`;

  conn.query(singleUserQuery, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Failed to get single user", err });
    
  }else if(result.length === 0){

    res.json({message:`No user ${id} not Found `})

  }else {
      res.status(200).json({ message: "Single user received", result });
    }
  });
});

route.post("/:userCode", (req, res) => {
  const { userCode } = req.params;

  const { username, password } = req.body;

  const sendUserQuery =
    "INSERT INTO users (username, password, userCode) VALUES(?,?,?)";

  conn.query(sendUserQuery, [username, password, userCode], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Failed to create user", err });
    } else {
      res.status(200).json({ message: "User Created", result });
    }
  });
});

route.put("/:id", (req, res)=>{

  const {id} = req.params;
  const {username, userCode} = req.body;
  const updateUsernameQuery = `Update users SET username = ?, userCode= ? WHERE user_id = ${id}`

  conn.query(updateUsernameQuery, [username, userCode], (err, result) => {
        if (err) {
      res.status(500).json({ message: "Failed to update user", err });
    } else {
      res.status(200).json({ message: "User update", result });
    }
  })

}) 

route.delete("/:id", (req, res)=>{

  const {id} = req.params;
  const {username, userCode} = req.body;
  const deleteUsernameQuery = `DELETE FROM users WHERE user_id = ${id}`

  conn.query(deleteUsernameQuery, [username, userCode], (err, result) => {
        if (err) {
      res.status(500).json({ message: "Failed to delete user", err });
    } else {
      res.status(200).json({ message: "User deleted", result });
    }
  })

}) 

module.exports = route;
