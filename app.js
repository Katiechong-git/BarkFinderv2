const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.sendFile("reactapp/public/index.html");
});

let ids = [
  "16078355",
  "16078363",
  "16077601",
  "16157843",
  "15996385",
  "15996388",
  "15843625",
  "15843829",
  "15989183",
  "15989245",
  "15889485",
  "16155165",
  "16113242",
  "15935798",
  "15840526",
  "15992988",
  "16118066",
  "16039442",
  "15840509",
];

let names = [];
let genders = [];
let breeds = [];
let ages = [];
let links = [];
let picLinks = [];

ids.forEach(scraperFunction);
function scraperFunction(item, index) {
  axios
    .get(`https://www.ilovefamilydog.org/dog-details/?id=${item}`)
    .then((response) => {
      let $ = cheerio.load(response.data);

      names[index] = `${$("h1").text()}`;
      genders[index] = $("td")
        .filter(function () {
          return $(this).text().trim() === "GENDER:";
        })
        .next()
        .text();
      breeds[index] = $("td")
        .filter(function () {
          return $(this).text().trim() === "PRIMARY BREED:";
        })
        .next()
        .text();
      ages[index] = $("td")
        .filter(function () {
          return $(this).text().trim() === "AGE:";
        })
        .next()
        .text()
        .trim();

      picLinks[index] = `${$(".img").attr("href")}`;

      links[index] = `https://www.ilovefamilydog.org/dog-details/?id=${item}`;

      console.log(genders);
      console.log(breeds);
      console.log(ages);
      console.log(names);
      console.log(picLinks);
      console.log(links);
    });
}
