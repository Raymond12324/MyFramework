import { User } from "./models/User";

console.log("Hello, world!");
 

const user  = new User({name: "John", age: 30});

console.log(user);

user.on("change", () => {
  console.log("Change #1"); 
});

user.trigger("change");