const person  = {name: "Имя", age: "Возраст"};
function printInfo(){
  console.log('${this.name},{this.age}');
}
printInfo.call(person);