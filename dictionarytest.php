<!DOCTYPE html>
<html>
	<head>
		<meta>

	</head>
	<body>
		
		<?php
			function grab_xml_definition ($word, $ref, $key) {
						
					$uri = "https://www.dictionaryapi.com/api/v1/references/" . urlencode($ref) . "/xml/" . 
								urlencode($word) . "?key=" . urlencode($key);
			                		return file_get_contents($uri);
				};

			$xdef = grab_xml_definition("test", "collegiate", "4f065a98-3635-4f28-ad52-f6d55e6b8f72");

			echo $xdef;	
		?>

	</body>
</html>