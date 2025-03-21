const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    menuname: { 
      type: String,
       required: true,
       
    },
    menudiscription: { 
        type: String,
        required: true
    },
    items: [
    {
        name: {
           type: String, 
           required: true
          
        },
        discription: { 
           type: String,
           required: true 
        },
        price: { 
           type: Number,
           required: true 
        }
    }
  ],
  userId: { 
    type: String,
     required: true
   }
  
})

 const menus= mongoose.model("menus", menuSchema);
 module.exports = menus















