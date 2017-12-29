<?php
$servername = "localhost";
$username = "yourdatabaseusername";
$password = "youdatabasepassword";
$database = "yourdatabasename";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Lon, Lat FROM Points";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    header('Content-Type: application/json');
    while($row = $result->fetch_assoc()) {
        $data = $row["Lon"]. ",". $row["Lat"];
        echo json_encode($row);
    }
} else {
    echo "0 results";
}

$conn->close();
?>
