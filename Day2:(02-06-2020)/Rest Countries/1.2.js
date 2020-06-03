//1.2 Extract and print the all the Country name with capital name in a console

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){ 
   var jsondata=JSON.Parse(this.Response); 
   for(var i in jsondata)
{ 

//print Countryname with capitals//

   console.log(jsondata[i].name,":",jsondata[i].capital);
 
}
}
request.Send();
