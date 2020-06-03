//convert all strings to title cap using anonymous function

var arr = ["a", "b", "c", "d", "e"];

var b = function(a) {
    for (var i = 0; i < arr.length; i++) 
    {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1)); 
    }
}
b(arr);
