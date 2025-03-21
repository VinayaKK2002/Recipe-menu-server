const menus =require("../models/menumodel")

exports.createMenu = async (req, res) => {
    console.log("Inside createMenu");
    const {menuname,menudiscription,items}= req.body
    const userId=req.userId
    console.log(menuname,menudiscription,items,userId)
     try {
            const existingMenu = await menus.findOne({menuname,userId})
            console.log(existingMenu);
            if (existingMenu) {
                return res.status(406).json(" Already exists menu name,please enter another name!" )
            }
               const newMenu = new menus({menuname,menudiscription,items,userId})
                await newMenu.save()
                 res.status(200).json(newMenu)
       
      } catch (error) {
      res.status(401).json(error)
    }
  }


//get data
 
  exports.getMenu = async (req, res) => {
    console.log("Inside getMenu")
    
     
     try {
          const allexistingMenu = await menus.find()
          res.status(200).json(allexistingMenu)
       
      } catch (error) {
          res.status(401).json(error)
    }
}

//remove menu- need authorisation
exports.removeMenuController = async (req,res)=>{
  console.log("inside removeMenuController");
  const {id} =req.params
  try{
      const deleteMenu=await menus.findByIdAndDelete({_id:id})
      res.status(200).json(deleteMenu)
  }catch(err){
      res.status(401).json(err)
  }

}


 //edit menu-need of authorization
 exports.editMenuController=async (req,res)=>{
    
  console.log("inside editMenuController ")
  const id = req.params.id
  const userId=req.userId
  const {menuname,menudiscription,items}= req.body

  try{
      const updateMenu=await menus.findByIdAndUpdate({_id:id},{menuname,menudiscription,items,userId},{new:true})
      await updateMenu.save()
      res.status(200).json(updateMenu)

  }catch(err){
     res.status(401).json(err)
  }
}