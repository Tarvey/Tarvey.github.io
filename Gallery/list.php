<?php
echo '<style>
html {color:white;background:url(../images/main/background.gif); font-family: Lato,ui-sans-serif,system-ui,sans-serif;}
a {color:white;}
</style>';
echo "<h1>Index of /Gallery/</h1><br>";
$path = ".";
$dh = opendir($path);
$i=1;
while (($file = readdir($dh)) !== false) {
    if($file != "."  && $file != "index.php" && $file != ".htaccess" && $file != "error_log" && $file != "cgi-bin") {
        echo "<a href='$path/$file'>$file</a><br />";
        $i++;
    }
}
closedir($dh);
?> 
