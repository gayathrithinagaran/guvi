const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var i;
  var sum = 0;
for(i = 1;i<=n; i++){
sum = sum + i;}
 console.log(sum);
 });
