const express = require("express");

function calculateSum(n) {
  let ans = 0;
  for (i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans);
});

app.listen(3000);
