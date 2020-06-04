//convert all the strings to title caps in a string array//

var arr=["pop","push","stack","data"];

var titleCaps=arr.map(word=>{
   var string = word[0].toUpperCase();
   for(var i=1;i<word.length;i++)string+=word[i].toLowerCase();
   return string;
    
}
 );
console.log(titleCaps);
