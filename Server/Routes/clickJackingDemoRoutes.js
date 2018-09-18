(function(){
    var express=require('express');
    var path = require('path');
    var clickJackDemoRouter=express.Router();
    clickJackDemoRouter.get('/test',function(req,res){
        res.send('Server Running');
    });
    clickJackDemoRouter.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'../../webArchives/ClickJacking/index.html'));
    });
    clickJackDemoRouter.get('/facebook.html',function(req,res){
        res.setHeader('X-FRAME-OPTIONS','DENY');
        res.setHeader('Content-Security-Policy' ,'frame-ancestors \'none\'');
        res.sendFile(path.join(__dirname,'../../webArchives/ClickJacking/facebook.html'));
    });
    module.exports = clickJackDemoRouter;
})();   