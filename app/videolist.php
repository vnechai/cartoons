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

	//find last row for pagination
		$result1 = mysqli_query($link, 
		"SELECT * 
		FROM cartoons
		ORDER BY id DESC
		LIMIT 1");
		$paglist = mysqli_fetch_array($result1);

		if (isset($_REQUEST['pag']) ){
			if ($_REQUEST['pag'] > 3){
			 $paginLast = $_REQUEST['pag'] - 4;
			}
			else $paginLast = $_REQUEST['pag'];
		}
		else{
			$paginLast = $paglist['id'];
		}
		$paginFirst = $paginLast - 3;

	/* Select queries return a resultset */
		$result = mysqli_query($link, 
		"SELECT * 
		FROM cartoons
		WHERE id BETWEEN '$paginFirst' AND '$paginLast'
		AND gender LIKE '$gender' 
		AND country LIKE '$country'
		ORDER BY id DESC");
		while ($myrow = mysqli_fetch_array($result)){
			//choose top age
			$ageVegeryficator =  $myrow["ageTop"] - $age;
			$myage = $age - $myrow['ageBottom'];
			 if ($ageVegeryficator >= 0 && $myage >= 0 || $age == "%"){

				echo "<li class='allCartoons' value='".$paginLast."'><div class='linkR' value=".$myrow['link'].">".$myrow['cartoon']."</div></li>";
			}
		}
		var_dump($paginFirst);
		var_dump($paginLast);

?>