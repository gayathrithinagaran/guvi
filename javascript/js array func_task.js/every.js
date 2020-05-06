var b=[2,3,4,5];
function prbm(b)
{
var e=1;
for(i=0;i<b.length;i++)
{
if(b[i]%b==0)
e=e*1;
else
e=e*0;
}
if(e==1)
{
return true;
}
else
{
return false;
}
}
console.log(prbm(2));
