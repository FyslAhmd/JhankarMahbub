function sayLoveYou() {
    console.log("I");
    console.log("Love");
    console.log("You");
}

sayLoveYou();
sayLoveYou();
sayLoveYou();

function doubleIt(num) {
    return num*2;
}

var first = doubleIt(5);
var second = doubleIt(50);
console.log(first+second);

var student1 = {name:"Faysal",id:4699};
var student2 = {name:"Eva",id:4690};

var st1 = student1.id;
var st2 = student2['name'];

console.log(st1,st2);

student2.name = "Esrat";
console.log(student2.name);

student1.cgpa = 3.85;
console.log(student1);
