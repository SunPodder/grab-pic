<?php

$imgName = $_POST['name'];
//the base64 string. This string also contains the file format of the encoded image.
$string = $_POST['baseString'];
//we only need the base64 string to decode it and create image file from it
//so we slice the whole string at the (,) as the file format and base64 string is separated by a comma
$base64 = explode(',', $string);
//after slicing the string we get an array.
//The first element is the file format and second is our real base64 string that we actually need
$base64 = $base64[1];
//decodes the base64 string and create the contents of the image file
$img = base64_decode($base64);
//random image name generated with javascript and sent here
$imgToSave = "uploads/Sun_".$imgName.".png";

//write downs image content and saves our image file
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
