<?php 
	if (isset($_REQUEST['age'])) {$age = $_REQUEST['age'];} else {$age = "%";}
	if (isset($_REQUEST['country'])) {$country = $_REQUEST['country'];} else {$country = "%";}
	if (isset($_REQUEST['gender'])) {$gender = $_REQUEST['gender'];} else {$gender = "%";}

	$link = mysqli_connect("localhost", "root", "321", "cartoon");
	/* check connection */
	if (mysqli_connect_errno()) {
	    printf("Connect failed: %s\n", mysqli_connect_error());
	    exit();
	}

	/* Select queries return a resultset */

		$result = mysqli_query($link, 
		"SELECT * 
		FROM cartoons
		WHERE gender LIKE '$gender' 
		AND country LIKE '$country'
		ORDER BY id DESC");
		while ($myrow = mysqli_fetch_array($result)){
			//choose top age
			$ageVegeryficator =  $myrow["ageTop"] - $age;
			$myage = $age - $myrow['ageBottom'];
			 if ($ageVegeryficator >= 0 && $myage >= 0 || $age == "%"){
				echo "<li><div class='linkR' value=".$myrow['link'].">".$myrow['cartoon']."</div></li>";
			}
		}
?>