//function to print Price of specific book in library

var printPrice = function(bookName){
for(var i=0;i<library.length;i++){
if(library[i].title===bookName){
console.log(library[i].price);
break;
}
}}
//call function printPrice

printPrice("Javascript");
© 2020 GitHub, Inc.
