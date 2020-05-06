var a=[1,2,3,4,5];
function squ(x)
{
for(i=0;i<a.length;i++)
{
a[i]=a[i]**x;
}
return a;
}
console.log(squ(2));
