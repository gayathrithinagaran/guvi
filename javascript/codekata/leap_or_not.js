const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
if(a%4==0){
     console.log("Y");
  }
else{
    console.log("N");
}
});
