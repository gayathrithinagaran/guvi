/function to find number of readers of specific book in library

var findNumOfReaders = function(bookName){
for(var i=0;i<library.length;i++){
if(library[i].title===bookName){
console.log(library[i].readers.length);
break;
}
}}
//call function findNumOfReaders

findNumOfReaders("Javascript");
