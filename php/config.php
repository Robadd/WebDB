<?php
	/*define('MYSQL_HOST','localhost');
	define('MYSQL_BENUTZER','gruppe01');
	define('MYSQL_KENNWORT','5HOO5W5V35');
	define('MYSQL_DATENBANK','gruppe01');
	*/
	define('MYSQL_HOST','localhost');
	define('MYSQL_BENUTZER','web312');
	define('MYSQL_KENNWORT','BPWMVE6I');
	define('MYSQL_DATENBANK','usr_web312_3');
	
	$db=mysqli_connect(MYSQL_HOST,MYSQL_BENUTZER,MYSQL_KENNWORT,MYSQL_DATENBANK);
	if(!$db)
		die('keine Verbindung möglich: ' . mysql_error());
	//mysql_select_db(MYSQL_DATENBANK);
?>