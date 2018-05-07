module.exports = function(app){
    app.get("/",function(req,res){
        
    });
    app.get("/main",function(req,res){
        res.render("main.ejs");
    });
}