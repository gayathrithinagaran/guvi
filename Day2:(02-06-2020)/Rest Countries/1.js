//1.1 Extract and Print All the Country name with the flag URL in console//


var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
var jsondata=JSON.Parse(this.Response);
 for(i=0;i<jsondata.length;i++)
{
console.log(jsondata[i].flag);
console.log(jsondata[i].countryname);
}
}
request.Send();
