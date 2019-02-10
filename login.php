<?php
include ('connect.php');
$sql = "SELECT * FROM userDatabase";
$result = mysql_query($cnct,$sql);
echo $result;

?>