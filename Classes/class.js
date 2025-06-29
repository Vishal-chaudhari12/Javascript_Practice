// class User{

//     constructor(username , email, password){
//         this.username= username
//         this.email= email;
//         this.password= password;

//     }

//     encryptedPassword(){
//         return `Password is ${this.password}abc`
//     }

//     createnewName(){
//         return `User Name is :${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("Vishal", "vishal@gmail.com" , "123");

// console.log(chai.encryptedPassword());
// console.log(chai.createnewName());



//Behind The SCene

function User(name , email, password){
    this.name= name;
    this.email= email;
    this.password= password

}

User.prototype.encryptedPassword = function(){
    return `Encryptrd Password is ${this.password}pqr`
}

User.prototype.createnewName = function(){
    return `New Name is : ${this.name.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com" , "987");

console.log(tea.encryptedPassword());
console.log(tea.createnewName());