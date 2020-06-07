//Creates a slice of array with n elements dropped from the end//

function dropRight(array,n)
{
    var res=array.slice(n);
    console.log(res);  //slice of arr//
}
dropRight([1, 2, 3],5)
