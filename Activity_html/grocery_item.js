<!DOCTYPE HTML>
	<html>
	<title>www.grocery.com</title>

	<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<style>
	body{
	background-color:grey;
	}
	
	#a1
	{ 
	background-color:steelblue;
	}
	#inpfield
	
	{
	background-color:steelblue;
	}
	#a2
	{ 
	background-color:lavender;
	}
	#b1
	{
	border-color:ghostwhite;
	}
	#b2
	{
	border-color:steelblue;
	}
	.click{
	text_align:center;
	display:block;
	width:500px;
	margin-left:8%;
	padding:2px;
	}
	.design{
	border-radius:5px solid black;
	position:relative;
	top:100px;
	left:30%;
	width:600px;
	padding:2px;
	border:1px solid black;
	margin:0;
	}
	
	.text-line
	{
	color:solid black;
	outline:none;
	outline-style:none;
	border-top:none;
	border-left:none;
	border-right:none;
	margin-left:9%;
	padding:3px 165px;
	background color: #0000FF;
	border-color:pink;
	}
	</style>
	</head>
	<body>
	
	<div class="design" id="a1">
	<h2><center><font color="lavender">Add Grocery Items</center></font></h2><br>
	<input type="text" id="inpfield" class="text-line"/><br><br>
	<button class="click" id="b1" onclick="myfunc()">Submit Here</button>
	<br>
	</div>
	<br><br><br>
	<div class="design" id="a2">
	<h2><center><font color="steelblue">Grocery Items</center></font></h2><br>
	<p id="res" class="text-line"></p>
	<button class="click" id="b2" >Clear items</button>
	<br>
	</div>
	<script>
	function myfunc(){
	var x=document.getElementById("inpfield").value;
	document.getElementById("res").innerHTML=x;
	}
	</script>
	</body>
	</html>
