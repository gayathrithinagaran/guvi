<html lang="en">
<head>
<meta charset="utf-8">
<title></title>
</head>
<body onload='document.form1.text1.focus() && document.form1.Password.focus()'>
<div>
<h2>Email & password validation</h2>
<form name="form1" action="#">
<ul>
</br>Email<input type='text' name='text1'/><br>
</br >*Enter email or phone number only.</br>
</br>Password<input type="text" name="Password"></br></br>
*Should have a special character at end(8 char length).<br><br>
<input type="submit" name="submit" value="Submit" onclick="allnumeric(document.form1.text1,document.form1.Password)" /></br>
</form>
</div>
<script src="reg.js">
</script>
</body>
</html>
© 2020 GitHub, Inc.
