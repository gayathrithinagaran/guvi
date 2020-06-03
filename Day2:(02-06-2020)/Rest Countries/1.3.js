//1.3 Extract and Print all the country name with alpha3Code and Population in console//


//create a variable called Request
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
var jsondata=JSON.parse(this.Response); 
   for(var i in jsondata)
{ 
   console.log(jsondata[i].name,":",jsondata[i].alpha3Code,"and Population is",jsondata[i].Population); 

}
}
request.send();
