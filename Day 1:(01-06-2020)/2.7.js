//function to find age of auther of a specific book in library

var findAutherAge = function(bookName){
for(var i=0;i<library.length;i++){
if(library[i].title===bookName){
console.log(library[i].authorDetails.age);
break;
}
}}
//call function findAutherAge

findAutherAge("Nodejs");
