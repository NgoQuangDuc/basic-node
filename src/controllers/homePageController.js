import Schema from '../services/define'

const Show=(req,res)=>{
    Schema.find({}, function (err, docs) {
        return res.render("homepage",{data:docs})
      });
}
const Create=(req,res)=>{
    Schema.create(req.body, function (err, small) {
        if (err) return handleError(err);
        res.redirect("/")
      });
}
const Delete=(req,res)=>{
    console.log(req.params)
    Schema.findByIdAndRemove(req.params.id, function (err) {
        if (err) console.log("Loi")
      res.redirect("/")
        
      });
}
const Shows=(req,res)=>{
    Schema.findById(req.params.id, function (err, adventure) {
        return res.render("update",{up:adventure})
    });


}
const Update=(req,res)=>{
    console.log(req.params)
    
    Schema.replaceOne(req.params,req.body,(ss)=>{
        res.redirect("/")
    });
 
}
module.exports={Show,Create,Delete,Update,Shows}