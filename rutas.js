module.exports = function(app){
    app.get("/",function(req,res){
        res.send("siadasudha");
    });
    app.get("/main",function(req,res){
        res.render("main.ejs");
    });
}