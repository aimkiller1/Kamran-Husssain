<?php

$connect = mysqli_connect('localhost','root','','alain');
if($connect){
	echo"This connection is successful";
}
else{
	echo'Connection error';
 ?>}
