<?php
// connect to MySQL

$conn = mysqli_connect("localhost", "root", "", "jsshoutbox");
// that is: server, user, password for database, database name
// that line is the connection string


// error checking
if(mysqli_connect_errno()) {
	echo 'Failed to connect: '.mysqli_connect_error();
}

?>
