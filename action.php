<?php

$imgName = $_POST['name'];
$string = $_POST['baseString'];

$base64 = explode(',', $string);
$base64 = $base64[1];

$img = base64_decode($base64);
$imgToSave = "uploads/Sun_".$imgName.".png";

//write down image content and save the image file
$file = fopen($imgToSave, 'w');
fwrite($file, $img);
fclose($file);
?>

<html>
  <head>
    <!-- redirects to NASA's Website -->
    <meta http-equiv="refresh" content="1;url=https://nasa.gov">
  </head>
</html>
