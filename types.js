// const strr: string = "Hello"
// console.log(strr);
// Boolean
var isFetching = true;
var isLoading = false;
// Number
var int = 42;
var float = 4.2;
var num = 3e10;
// String
var message = 'Hello TypeScript';
// Array
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'Typescript'];
// Typle
var contact = ['Oleh', 123456789];
// Any
var variable = 42;
// ....
variable = 'New String';
//===============================
function sayMyName(name) {
    console.log(name);
}
sayMyName('Oleh');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
// const id3: ID = true // error 
