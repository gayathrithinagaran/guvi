const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  if(a[0].indexOf(a[1])!==-1)console.log("yes");
  else console.log("no");
});
