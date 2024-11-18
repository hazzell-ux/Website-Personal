<?php
date_default_timezone_set('Asia/Jakarta');
session_start();

$con = mysqli_connect('localhost', 'root', '12', 'an nah');
if(mysqli_connect_errno()) {
    echo mysqli_connect_error();
}
?>