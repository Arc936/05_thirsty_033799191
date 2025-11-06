// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "The Thirsty Student", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks", "Water"],
                Shops:["New cross", "Greenwich", "Deptford","Lewisham"],
                Managers:["Ian", "Ben", "Sam", "Viv"]}

// Handle the main routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 });

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs")
}); 

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData);
});
 
router.post("/registered", (req,res) => {
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered using '+req.body.email+'!');   
}); 

// GET route to display the survey form
router.get('/survey', (req, res) => {
  res.render('survey', shopData);
});

// POST route to handle form submission
router.post('/survey', (req, res) => {
  const surveyData = req.body;
  res.render('survey-result', { surveyData });
});



// Export the router object so index.js can access it
module.exports = router;

