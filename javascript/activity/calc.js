<html>
<head>
<title>simple calculator</title>
<style>
table{
border:2px solid black; 
width:30%;
background-color:grey;
}
td{
padding:15px;
height:100%;
color:white;
}
input{
width:100%;
height:200%;
background-color:white;
}
button{
width:100%;
height:200%;
}
button:hover{
color: #8AC007;
font-weight:bold;
}
</style>
</head>
<body>
	<script>
	function number(value){
		document.form1.result.value +=value;
	}
	function cle(value){
		document.form1.result.value =value;
	}
	function evalua(){
		//var evalu = eval(document.form1.result.value);
		document.form1.result.value = eval(document.form1.result.value);
	}
	</script>
	<form name="form1">
	<table align="center">
	<tr><td colspan="4">SIMPLE CALCULATOR</td></tr>
		<tr><td colspan="4">
		<input type = "text" name="result" placeholder="0" disabled style="text-align:right"></input>
		</td></tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="1">1</button></td>
		<td><button type = "button" onclick="number(value)" value="2">2</button></td>
		<td><button type = "button" onclick="number(value)" value="3">3</button></td>
		<td><button type = "button" onclick="number(value)" value="+">+</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="4">4</button></td>
		<td><button type = "button" onclick="number(value)" value="5">5</button></td>
		<td><button type = "button" onclick="number(value)" value="6">6</button></td>
		<td><button type = "button" onclick="number(value)" value="-">-</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="7">7</button></td>
		<td><button type = "button" onclick="number(value)" value="8">8</button></td>
		<td><button type = "button" onclick="number(value)" value="9">9</button></td>
		<td><button type = "button" onclick="number(value)" value="/">/</button></td>
		</tr>
		<tr>
		<td><button type = "button" onclick="number(value)" value="."><strong>.</strong></button></td>
		<td><button type = "button" onclick="number(value)" value="0">0</button></td>
		<td><button type = "button" onclick="number(value)" value="*">*</button></td>		
		<td><button type = "button" onclick="number(value)" value="%">%</button></td>
		</tr>
		<tr>
		<td colspan="2">
		<button type = "button" onclick="cle(value)" value="">C</button></td>
		<td colspan="2">
		<button type = "button" onclick="evalua()">=</button>
		</td>
		</tr>
	</table>
	</form>
	
	
</body>
</html>

 
