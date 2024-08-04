const users = [user1,user2,user3];
const userAge=users.filter((item)=>{
    return item.age >=18;
});
console.log(userAge);
const userName=userAge.map((item)=> {
    return item.name;
});
console.log(userName);