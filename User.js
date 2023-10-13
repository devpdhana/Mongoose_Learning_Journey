const mongoose = require('mongoose')
//schema creation
const addressSchema = new mongoose.Schema({
    street:String,
    village:String
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type:Number,
        min:1,
        max:100,
        validate:{
            validator: v => v%2===0,
            message:props=>`${props.value} is not a even number`
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        maxLength:25
    },
    India: Boolean,
    createdAt:{
        type:Date,
        immutable:true,
        default: ()=>Date.now()
    },
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"users"
    },
    updatedAt:{
        type:Date,
        immutable:true,
        default: ()=>Date.now()
    },
    hobbies:[String],
    Address:addressSchema
})

//Adding function to schema
userSchema.methods.sayHello = function(){
    return `Hey ${this.name} hi`
}

//Global to collections
userSchema.statics.findByName = function(name){
    return this.where("name").equals(name)
}


//Query
userSchema.query.byName= function(name){
    return this.where("name").equals(name)
}

//Virtual properties
userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`
})

//Middleware   save,validation,remove,update
userSchema.pre("save",function(next){
    // this.hobbies.push("updated")
    this.hobbies = [...this.hobbies,"updated"]
    next()
})

userSchema.post("save", function (doc,next) {
  console.log(doc.sayHello());
  next();
});
//model
module.exports = mongoose.model('users',userSchema)
