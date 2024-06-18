<?php

header("Content-Type: text/plain; charset=utf-8");

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$name = $_POST["name"];
$content = $_POST["content"];

if($name === "" || $content === "") {
	echo "false";
} else {
	$result = mb_send_mail("3kenfunsui@gmail.com", $name ."さんからのメール", $content);

	if($result)
		echo "true";
	else
		echo "false";
}