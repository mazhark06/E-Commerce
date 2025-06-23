module.exports= asyncHandler
 
 function asyncHandler(fn) {
    return async function(req,res,next){
        try {
            await fn(req,res,next)
        } catch (error) {
            res.status(err.code).json({
                success:true,
                message: err.message
            })
        }
    }
}
