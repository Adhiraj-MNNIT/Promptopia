import { Schema , model , models} from 'mongoose'


const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true , 'Email already exists!'],
        required: [true , 'Email already required!'],
},
   username: {
    type: String,
    required: [true, 'Username is required!'],
    // match: [^(\S+\s+){3}\S+$ , 
    // "Username invalid, it should contain 4 characters and be unique!"]
  },
  image: {
    type: String
  }
})

/* Models object stores all registered models
   is a model named "user" already exists in models object , it assigns that existing model
   to user
   prevents us from redifining model and ensuring that existing model is reused

*/

const User = models.User || model("User",UserSchema);

export default User;