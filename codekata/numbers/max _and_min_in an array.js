const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],l=n[1].split(" ").map(x=>+x),min,max,i,j;
  min=Math.min(...l);
  max=Math.max(...l);
  i=l.indexOf(min);
  j=l.indexOf(max);
  console.log(j-i);
});
