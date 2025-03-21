const express=require('express')
const router=new express.Router()
const menuContoller =require('../controllers/menuController')
const userController =require('../controllers/userController')
const jwtMiddleware=require('../middlewares/jwtMiddleware')


//register
router.post("/register",userController.registerController)

//login
router.post("/login",userController.loginController)


 //add menu 
router.post("/add-menu",jwtMiddleware,menuContoller.createMenu)

 //get menu
 router.get("/getAll-menu",menuContoller.getMenu)

 //delete plan http://localhost:3000/workoutplan/:id/remove
router.delete('/menu/:id/remove',jwtMiddleware,menuContoller.removeMenuController)

//edit plan http://localhost:3000/workoutplan/id/edit
router.put('/menu/:id/edit',jwtMiddleware,menuContoller.editMenuController)





module.exports = router