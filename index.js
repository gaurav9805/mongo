const mongoose = require('mongoose');

main().then((res) => {
console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name :String,
    email : String,
    age : Number,
});
const User = mongoose.model("User", userSchema);
const user2 = new User({
    name : "Eve",
    email: "eve@yahoo.in",
    age :36,
});
user2.save()
.then((res) => {
    console.log(res);

})
.catch(err => {
    console.log(err);
});
User.find({})
.then((res) => {
    console.log(res);

})
.catch((err) => {
    console.log(err);
});
User.updateOne({name: "Eve"}, {age:51})
.then((res) =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
});
User.findOneAndUpdate({name: "Eve"}, {age:88})
.then((res) =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
});