<?php
$servername = "localhost";
$username = "yourdatabaseusername";
$password = "youdatabasepassword";
$database = "yourdatabasename";
$lon=$_POST["lon"];
$lat=$_POST["lat"];


$con = mysqli_connect($servername, $username, $password, $database);
mysqli_select_db($con, $database);

$sql = "INSERT INTO Points(Lon, Lat) VALUES ($lon, $lat)";

if (mysqli_query($con, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);
?>
