const express = require("express");
const router = express.Router();
let count = 0;

router.put("/count", (req, res) => {
  res.json(`This route has been hit ${count++} times`);
});

router.delete("/reset", (req, res) => {
  count = 0;
  res.json("The count has been reset");
});

router.post("/sum", (req, res) => {
  console.log(req.body);
  const number = req.body.number;
  res.json(`the sum of ${number} and 7 is ${number + 7}.`);
});

router.get("/subtract", (req, res) => {
  console.log(req.query);
  const number = req.query.number;
  res.json(`${number} - 7 is ${number - 7}.`);
});

// exports.reset = (req, res) => {
//   const express = require("express");

//   count = 0;

//   res.send(`Count has been reset to ${count} `);
// };

// exports.sum = ('/sum', (req, res) => {
//   const express = require("express");
//   // const number = req.body.number
//   console.log(req.number)
//   //res.send(`the sum of ${number} and 7 is ${number + 7}.`)
// })

module.exports = router;
