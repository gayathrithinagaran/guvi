//Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com in both author details//


//function to add email to authorDetails in library

var addEmail = function(Index,emailid){
library[Index].authorDetails["email"]= emailid;
Console.log(library[index].authorDetails);
}

//ASSIGNING  A VALUE TO email1@gmail.com and email2@gmail.com

addEmail(0,"email1@gmail.com");
addEmail(1,"email2@gmail.com");
