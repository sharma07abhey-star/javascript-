const user = {
    username: "Abhey",
    age : 18 ,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        // here this refers to user object
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Parneet"
user.welcomeMessage()

console.log(this);

// in node environment this refers to global object

// function barfi(){
//     let username = "Sharma"
//     console.log(this.username);
// }
// barfi();

// const chai = function(){
//     let username = "Sharma"
//     console.log(this.username);
// }
// chai();


const chai = () => {
    let username = "Sharma"
    console.log(username);
}
chai();

