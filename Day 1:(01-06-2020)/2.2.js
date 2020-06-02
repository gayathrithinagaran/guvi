//Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com in both author details//


//function to add email to authorDetails in library

var AddEmail = function(Index,Emailid)
{
library[Index].authorDetails["email"]= Emailid;
Console.log( library[index].authorDetails);
}
}

//ASSIGNING  A VALUE TO email1@gmail.com and email2@gmail.com

AddEmail(0,"email1@gmail.com");
AddEmail(1,"email2@gmail.com");
