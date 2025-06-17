const express = require("express");
const app = express();
const PORT = 3000;

let previousCrashes = [];

function predictNextCrash() {
  const last = previousCrashes.at(-1) || 1.5;

  let prediction;
  if (last < 1.2) {
    prediction = (Math.random() * 2 + 2).toFixed(2);
  } else if (last > 5.0) {
    prediction = (Math.random() * 2 + 1).toFixed(2);
  } else {
    prediction = (Math.random() * 3 + 1.2).toFixed(2);
  }

  const actual = (Math.random() * 10).toFixed(2);

  previousCrashes.push(parseFloat(actual));
  if (previousCrashes.length > 50) previousCrashes.shift();

  return {
    prediction,
    actual
  };
}

app.get("/predict", (req, res) => {
  const result = predictNextCrash();
  res.json(result);
});

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Bot running at http://localhost:${PORT}`));
