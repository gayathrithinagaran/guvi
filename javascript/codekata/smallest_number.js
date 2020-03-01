const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[];
  a=n[0].split(" ")
  if(a[0]>a[1]){
    console.log(a[1])}
  else{
    console.log(a[0])}
});
© 2020 GitHub, Inc.
