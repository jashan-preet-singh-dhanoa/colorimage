const num = 32;
var interval = parseInt(256 / num);
var totalNumber = 0;
var array = [];
for (let r = 1; r <= num; r++) { 
  for (let g = 1; g <= num; g++) { 
     for (let b = 1; b <= num; b++) {
        array.push("rgb(" + (r * interval)+","+(g * interval)+","+(b * interval) +")")
        totalNumber++;
     }
  }
}
// Get rgb color code endpoint
const Color = (app) => {
  app.get("/api/rgb/color-code", (req, res) => {
      const limit = req.query.limit;
      const colorArr = array.slice(0,limit)
      res.send({ data: colorArr, total: totalNumber });
  });
};

module.exports = Color;
