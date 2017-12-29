<?php
$servername = "localhost";
$username = "yourusername";
$password = "yourpass";
$database = "yourdb";

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
    while($row = $result->fetch_assoc()) {
        echo "<br> lon: ". $row["Lon"]. " - lat: ". $row["Lat"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
