const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  const n=[];
  for(i=0;i<=n;i++)
  {
  if(data%2==0)
  {
    console.log("Even");
  }
  else
  {
    console.log("Odd");
  }
  }
});
