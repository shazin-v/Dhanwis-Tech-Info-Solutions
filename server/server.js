import mysql from "mysql";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const mydb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form",
});

app.get("/", (req, res) => {
  const sql = "select * from login";
  mydb.query(sql, (err, result) => {
    if (err) return res.json({ Message: "error insdie server" });
    return res.json(result);
  });
});

app.put("/", (req, res) => {
  const sql =
    "insert into `login` (`Name`,`Age`,`Email`,`Phone`,`Course`,`Education`) VALUES (?) ";
  const data = [
    req.body.name,
    req.body.age,
    req.body.email,
    req.body.phone,
    req.body.course,
    req.body.education,
  ];
  console.log("req body", req.body);

  mydb.query(sql, [data], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.listen(8070, () => {
  console.log("listening port 8070");
});
