const getAllJobs = async(req,res)=>{
    res.send("get Jobs");
}

const getJob = async(req,res)=>{
    res.send("get Job");
}

const createJob = async(req,res)=>{
    res.json(req.user);// i am getting this req.user fromm auth middleware if the user is verified
    // req.user not like {req.user}
}

const updateJob = async(req,res)=>{
    res.send("update Job");
}

const deleteJob = async(req,res)=>{
    res.send("delete Job");
}

module.exports ={getAllJobs,getJob,updateJob,createJob,deleteJob};