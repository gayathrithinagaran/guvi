const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],i,num;
  num=parseInt(a[0])+parseInt(a[1]);
  i=a.indexOf(num);
  if(i!==-1) console.log("1");
  else console.log("0");
});
