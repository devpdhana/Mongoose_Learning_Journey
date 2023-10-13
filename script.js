const mongoose = require('mongoose')
const User = require('./User') 
// mongoose.connect("mongodb://localhost/testdb")

//fetch error
main().catch((err)=>console.log(err.message))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

    // const userTwo = await User.create({
    //   name: "Prasanth",
    //   age:10,
    //   email:"parasanthg@gmail.com"
    // });

    // const user = await User.create({
    //   name: "devpdhana",
    //   age: 22,
    //   email:"Devpdhanasekar@gmail.com",
    //   India: true,
    //   hobbies: ["coding", "working"],
    //   Address: { street: "Pillaiyar Kovil street", village: "Puthagaram" },
    // });
    // user.createdAt = 12

    //Read data from db
    // const user = await User.findOne(User.where("name").equals("devpdhana").where("age").equals(22).limit(10).populate("bestFriend"));
    const user = await User.findOne(User.where("email").equals("devpdhanasekar@gmail.com").where("age").equals(22))
    // console.log(user.namedEmail)
    // console.log(user.sayHello())

    // user[0].bestFriend = "6526980f43aed48a5e9c7dcf";
    // await user[0].save()
    console.log(user)

    user.save()
    console.log(user)
    // console.log(userTwo);
}


// Important
//1)Schema
//2)Model
//3)Query


// const user = new User({name:"devpdhana",age:21})
// user.save()
// console.log(user)