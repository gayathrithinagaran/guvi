//2.Creates an array with all falsey values removed//.

var arr = [ 1, 2, 3, undefined, 0, null ];
arr.forEach( function(val, i, arr)
{
    if(val===undefined || val===null || val===0)
    {
        arr.splice(i,1)        
    }; 
});
console.log(arr ); //returns the new arr of filtered values//
