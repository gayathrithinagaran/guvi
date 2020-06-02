//Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com in both author details//
//function to add email to authorDetails in library

var addEmail = function(index,emailId){
library[index].authorDetails["email"]=emailId;
console.log(library[index].authorDetails);
}

//assigning email to authorDetails in library

addEmail(0,"email1@gmail.com");
addEmail(1,"email2@gmail.com");
