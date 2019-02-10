<?php
include ('connect.php');
$sql = "SELECT * FROM userdatabase";
$result = mysqli_query($cnct,$sql);
$print = "";
while ($row = mysqli_fetch_assoc($result)){
	$print.= $row['Serial'];
}
echo $print;

?>