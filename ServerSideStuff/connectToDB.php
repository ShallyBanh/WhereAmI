<?php
$servername = "localhost";
$username = "yourusername";
$password = "yourpass";
$database = "yourdb";
$lon=$_POST["lon"];
$lat=$_POST["lat"];
date_default_timezone_set('America/Denver');

$con = mysqli_connect($servername, $username, $password, $database);
mysqli_select_db($con, $database);

$sql = "INSERT INTO pointsWithTime(Lon, Lat, Time) VALUES ($lon, $lat, now())";

if (mysqli_query($con, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);
?>
