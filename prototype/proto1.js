// let myName = "vishal    ";
// let myName2 ="Vishu   ";

// console.log(myName.trim().length);
// console.log(myName.length);
// console.log(myName.truelength);
// console.log(myName.alllength);



function SetUsername(username){
    this.username = username;
    console.log('username');

}

function CreateUsername(username , email, password){
  
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;

}


const User = new CreateUsername("Vishal" ,"vishal@gmail.com" ,"Vishal@123");

console.log(User);