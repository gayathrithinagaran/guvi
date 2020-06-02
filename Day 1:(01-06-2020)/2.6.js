//function to print Price of specific book in library

var printPrice = function(bookName)
{
for(var j=0;j<library.length;j++){
if(library[j].title===bookName) 
{
console.log(library[i].price);
break;
}
}
}
//call function printPrice

printPrice("Javascript");
