const
mongoose    = require("mongoose"),
express     = require("express"),
app         = express();

// mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index")
})


app.listen(3000, () => console.log("Server is listening..."))