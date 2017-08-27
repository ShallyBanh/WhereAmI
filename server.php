<?php
$lon=$_POST["lon"]; 
$lat=$_POST["lat"]; 
$file = 'index.txt';
$data = $lon."\n".$lat."\n";

// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
?>