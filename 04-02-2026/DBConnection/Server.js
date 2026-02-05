const express = require("express");
const mysql=require("mysql2");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Jaga2003",
    database:"dbconnection"
})
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB Connecting successfully");
    }
})

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting data");
    } else {
      res.json({
        message: "User inserted successfully",
        userId: result.insertId
      });
    }
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching users");
    } else {
      res.json(result);
    }
  });
});


app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
