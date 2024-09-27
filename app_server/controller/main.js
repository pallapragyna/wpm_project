module.exports.index=function(req,res){
    res.render('index', { title: 'Zoggy' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Zoggy' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Zoggy' });
   };