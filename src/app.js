const express = require("express")
const app = express()
const path=require("path");
const port=process.env.PORT||8001
const hbs=require("hbs")
 var static_Path=path.join(__dirname,"../public")
 var template_Path =path.join(__dirname,"../templates/views");
 var partials_Path=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs")
app.set("views",template_Path)
hbs.registerPartials(partials_Path)
app.use(express.static(static_Path))


app.get("/", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"SORRY FOR THAT"
    })
    })

app.listen(port, () => {
    console.log("listning server")
})