<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include "../backend-assets.php";

$ApiCall = new ApiCall();
$bunchData = json_decode($ApiCall->setStringContent(), true);
//echo "<pre>" , var_dump($bunchData);
var_dump($bunchData["results"][0]['name'])
?>
