const db = require("../models");

module.exports = function (app, axios, cheerio) {
    
    //route for scraped sites
   
    /////GET ARTICLES IN MONGODB/////
    // app.get("/api/articles", function (req, res) {
    //     db.Article.find({})
    //         .then(function (dbArticle) {
    //             res.json(dbArticle)
    //         })
    //         .catch(function (err) {
    //             res.json(err)
    //         });
    // });
/////GET ARTICLE WITH COMMENTS/////
    // app.get("/api/articles/:id", function(req, res){
    //     db.Article.findOne({_id: req.params.id})
    //     .populate("comment")
    //     .then(function(dbArticle){
    //         res.json(dbArticle);
    //     })
    //     .catch(function(err){
    //         res.json(err);
    //     });
    // });

    /////POST COMMENT + JOIN TO ARTICLE W/ ID /////
    // app.post("/api/articles/:id", function(res, req){
    //     db.Comment.create(req.body)
    //     .then(function(dbComment){
    //         return db.Article.findOneAndUpdate({_id: req.params.id}, {comment: dbComment._id}, {new: true});
    //     })
    //     .then(function(dbArticle){
    //         res.json(dbArticle)
    //     })
    //     .catch(function(err){
    //         res.json(err)
    //     });
    // });

    
}