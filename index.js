const express = require("express");

const app = express();

const port = 5000;



app.get("/", (req, res) => {
    res.send ("I am <name>, wilder in <city>, and I love <language>");
    });
  

  app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  
