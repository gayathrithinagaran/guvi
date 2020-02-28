const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
inp.on("line",data=>{
  var a= parseInt(data);
  var s= (a*1.8+32);
  console.log(s.toFixed(2));
});
