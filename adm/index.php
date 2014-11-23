<!DOCTYPE html>
<html>
<head>
	<title>Админ Мульт Пульт</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="assets/css/admin.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
	<script src="assets/js/main.js"></script>
	<div class="wrap">
	<label>
		<form class="chek" action="app/adminLog.php" method="POST">
			<p>Логин <input id="log" name="log"></p>
			<p>Пароль<input id="pass" name="pass" type="password"></p>
			<input type="submit">
		</form>
	</label>
	</div>
</body>
</html>