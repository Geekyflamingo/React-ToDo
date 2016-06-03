// function add (a, b) {
// 	return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5, 9, 10, 11];
// // add(toAdd[0], toAdd[1]);
// console.log(add(...toAdd));

// var groupA = ['ben', 'becca', 'jen'];
// var groupB = ['judy', 'jane'];
//
// var final = [...groupB, 3, ...groupA ];
//
// console.log(final);

var person = ['Becca', 27];
var person2 = ['Andrew', 27];
// Hi Andrew you are 25.

function message(name, age) {
	console.log('Hi ' + name +', you are ' + age);
}

message(...person);
message(...person2);

var names = ['Andrew', 'Jane'];
var final = [...names, 'Becca'];

// Hi Becca
// for (var i = 0; i < final.length; i++) {
// 	console.log('Hi ' + final[i]);
// }

final.forEach(function (name) {
	console.log('Hi ' + name);
})
