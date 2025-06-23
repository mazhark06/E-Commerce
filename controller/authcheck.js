function apiRoute(req,res){
res.status(201).json({message : req.user})
}
module.exports = apiRoute