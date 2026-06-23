
const asyncHandler = (fn)=>{


    return async(req,res,next)=>{
        try{
            await fn(req,res,next)
        }catch(err){
            next(err)
        }
    
    }
}

module.exports = asyncHandler;


/*
const getUsers = async (req, res) => {

    const users = await User.find();

    res.json(users);

}

\>
router.get("/users", asyncHandler(getUsers));


\>
fn==getUsers



*/
