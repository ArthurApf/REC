import express from 'express';
const sqlite3 = require("sqlite3");
const app = express();
const hostname = "127.0.0.1";
const port = 5500;
const db = new sqlite3.Database("info_curr.db")
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

app.get("/", function(req,res){
  res.sendFile(
    path.resolve(__dirname + "/Curr_sem5.html")
  )
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.get("/end1", (req, res) => {
  db.get(
    `SELECT INFO FROM skills`,
    (error, data) => {
      res.json(data)
    }
  );
});

app.post("/end1", (req, res) => {
  db.post(
    `INSERT INTO skills (id, info)`,
    (error, data) => {
      res.json(data)
    }
  );
});

app.post("/end1", (req, res) => {
  db.post(
    `UPDATE skills SET info = "" WHERE id = 1`,
    (error, data) => {
      res.json(data)
    }
  );
});

app.post("/end1", (req, res) => {
  db.post(
    `DELETE FROM skills WHERE id = "" `,
    (error, data) => {
      res.json(data)
    }
  );
});