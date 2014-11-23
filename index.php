<!DOCTYPE html>
<html>
<head>
	<title>Мульт Пульт</title>
	<meta charset="UTF-8">
	<link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	<link rel="stylesheet" type="text/css" href="assets/sans/comicrelief.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
	<script src="assets/js/main.js"></script>
<body>
	<div class="wrap">
		<div class="asks">
			<div class="gender">
				<h3>Ты у нас???</h3>
				<div class="genderChield" value="x"><img width="90px"  src="assets/img/gender/boy.jpg"></div>
				<div class="genderChield" value="y"><img width="90px"  src="assets/img/gender/g.jpeg"></div>
			</div>

			<div class="age">
				<h3>Сколько тебе лет?</h3>
				<div class="ageChield" value="1"><img src="assets/img/hands/1.jpeg"></div>
				<div class="ageChield" value="2"><img src="assets/img/hands/2.jpeg"></div>
				<div class="ageChield" value="3"><img src="assets/img/hands/3.jpeg"></div>
				<div class="ageChield" value="4"><img src="assets/img/hands/4.jpeg"></div>
				<div class="ageChield" value="5"><img src="assets/img/hands/5.jpeg"></div>
			</div>
			<div class="country">
				<h3>Выбери страну производителя</h3>
				<div class="countryChield" value="r" id="ru"></div>
				<div class="countryChield" value="j" id="japan"></div>
				<div class="countryChield" value="u" id="usa"></div>
			</div>
		</div>
		<div class="list">
			<div class="lister">
				<ul class="listResult"></ul>
			</div>
			<div class="monitor" hidden></div>
		</div>
	</div>
</body>
</html>