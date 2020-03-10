const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  let a=n[1].split(" "),b=parseInt(n[0]),f=0,l=0;
  for(var i=0;i<3;i++)
    f+=parseInt(a[i]);
  for(var i=b-1;i>b-4;i--)
    l+=parseInt(a[i]);
  if(f===l)console.log("1");
  else console.log("0");

});
