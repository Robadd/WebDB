<?php 
require_once("config.php");
if($_GET['type'] == "list")
{
	$sql="SELECT id, vorname, nachname, DATE_FORMAT(geburtsdatum, '%d.%m.%Y') AS geburtsdatum, wohnort, feuerwehr,  DATE_FORMAT(urlaubBis, '%d.%m.%Y') AS urlaubBis FROM mitglied ORDER BY nachname ASC , vorname ASC";
	$result = mysqli_query($db,$sql) or die("Fehler".mysql_error());
	$arr = array();
	while($row = mysqli_fetch_assoc($result)){ $arr[] = $row; }
	echo json_encode($arr);
}
?>