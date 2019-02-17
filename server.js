const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Scraping tools
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB with heroku 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  });

// A GET route for scraping the echoJS website
app.get("/scrape", function (req, res) {
  console.log("in scrape")
  axios.get("https://www.streetsblog.org/")
      .then(function (response) {
          const $ = cheerio.load(response.data);

          $("h2.entry-title").each(function (i, element) {
              const result = {};

              result.title = $(this)
                  .children("a")
                  .text();
              result.link = $(this)
                  .children("a")
                  .attr("href");

              // results.title = $(this)
              //     .find("span")
              //     .text();
              // results.link = $(this)
              //     .children("a")
              //     .attr("href");
              // result.img = $(this)
              // .children(".article-img-container")
              // .children("a")
              // .chilren("img")
              // .attr("src");
              // result.excerpt = $(this)
              // .children(".article-excerpt")
              // .text();

              // Creating a new Article using the `result` object built from scraping
              db.Article.create(result)
                  .then(function(dbArticle) {
                      console.log(dbArticle);
                  })
                  .catch(function(err) {
                      console.log(err);
                  })
          });

          // Send message to client
          res.send("Scrape Complete");
      })
     
});


app.get('/articles', function(req, res){
  db.Article.find({}).then(result => {
    res.send(result);
  })
})

////GET ARTICLE WITH COMMENTS/////
    app.get("/api/articles/:id", function(req, res){
      console.log(req.params.id, "in find article")
        db.Article.find({_id: req.params.id})
        .populate("note")
        .then(function(dbArticle){
            res.json(dbArticle);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    /////POST COMMENT + JOIN TO ARTICLE W/ ID /////
    app.post("/api/articles/:id", function(req , res){
      console.log(req.body, "this is what we are getting when we create note")
        db.Note.create(req.body)
        .then(function(note){
          //
            return db.Article.findOneAndUpdate({_id: req.params.id}, {note: note._id}, {new: true});
        })
        .then(function(dbArticle){
            res.json(dbArticle)
        })
        .catch(function(err){
            res.json(err)
        });
    });

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
