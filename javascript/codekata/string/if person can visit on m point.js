const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var l=n[0].split(" ").map(x=>+x),a=[],b=[],c=0;
  for(var i=1;i<=l[0];i++){
    var s=n[i].split(" ").map(x=>+x);
    a.push(s[0]);
    b.push(s[1]);
  }
  for(var i=0;i<l[0];i++){
    for(var j=a[i];j<=b[i];j++){
      if(l[1]===j){c=1;break;}
    }
  }
  if(c===1)console.log("yes");
  else console.log("no");
});
