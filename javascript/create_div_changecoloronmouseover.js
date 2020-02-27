<html>
<head>
<title>create a div and change the color onmouseover</title>
</head>
<body>
<script src="task1.js></script>
</body>
</html>
///////js document
var x=document.createElement("div");
x.id="img";
x.style.color="red";
var t= document.createTextNode("paragraph is created.");
x.appendChild(t);
document.body.appendChild(x);
document.getElementById("img".onmouseover=function(){
mouseover()
};
function mouseover(){
   document.getElementById("img".style.color="blue";
   }
