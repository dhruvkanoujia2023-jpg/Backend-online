const developer=require('../models/developer')
const createDeveloper=async(req,res)=>{
  const {name,email,age,domain,password}=req.body;
  const newDeveloper=new developer({
    name,
    email,
    age,
    domain,
    password
  });
  await newDeveloper.save();

  res.send({message:newDeveloper})
};
const getDeveloper=async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);

    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }

    res.json(developer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateDeveloper=async(req,res)=>{
  const id=req.params.id;
  const data=req.body;
  const updateData=await developer.findByIdAndUpdate(id,data,{new:true});
  res.json({
    message:"Develooper updated successfully",
    updateData
  })
};
const deleteDeveloper=async(req,res)=>{
  const id=req.params.id;
  const deleteDeveloper=await developer.findByIdAndDelete(id)
  res.json({
    message:"Deleted successfully",
    deleteDeveloper
  })
};

module.exports={updateDeveloper,createDeveloper,getDeveloper,deleteDeveloper}