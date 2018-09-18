(function(){
    var clickJackDemoRoutes = require('./clickJackingDemoRoutes');
    module.exports = function(app){
        app.use('/clickJack',clickJackDemoRoutes);
    };
})();