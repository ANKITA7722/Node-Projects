const MyCollege=(req,res,next)=>{
    req.myclg="cybrom object";
    console.log("my app level middlewere")
    next()
}

module.exports= MyCollege;