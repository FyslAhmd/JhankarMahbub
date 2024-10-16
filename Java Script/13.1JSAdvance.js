var friendsAge = [23, 18, 24, 27, 21, 22];
console.log(friendsAge);
console.log(friendsAge[0]);
friendsAge[0] = 20;
console.log(friendsAge);
console.log(friendsAge.indexOf(18));

friendsAge.push(30);
console.log(friendsAge);
console.log(friendsAge.length);

friendsAge.pop();
console.log(friendsAge);

friendsAge.unshift(10);
console.log(friendsAge);

friendsAge.shift();
console.log(friendsAge);

var newArray = [...friendsAge.slice(0, 3), 100, ...friendsAge.slice(3)];
console.log(newArray);

console.log(newArray.slice(2,5));