  
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],sum;
  if(parseInt(a)<0){
    sum=parseInt(a[2])+parseInt(a[a.length-1]);
  }
  else{
    sum=parseInt(a[a.length-2])+parseInt(a[a.length-1]); 
  }
  if(sum%4===0)console.log("yes");
  else console.log("no");
});
