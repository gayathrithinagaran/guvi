//FUNCTION TO FIND NODEJS AUTHOR//

var FindAuthorAge = function(BookName){
for(var j=0;j<library.length;j++)
{
if(library[j].title===BookName)
{
console.log(library[j].authorDetails.age);
break;
}
}
}

//call function findAutherAge

FindAuthorAge("Nodejs");
