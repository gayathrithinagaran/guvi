var n=[1,6,3,8,5];
function odd(n){
o=[];
for(i=0;i<n.length;i++)
{
if(n[i]%2!==0)
{
o.push(n[i]);
}
return o;
}
console.log(odd(n));


