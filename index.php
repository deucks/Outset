<!DOCTYPE html>
<html>
<head>
	<link href="styles/style.css" rel="stylesheet" type="text/css" /> 
	<script src="js/jquery-1.11.1.min.js" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>
	<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>
</head>
<body>

	<div class="background">
		<img id="loader" src="loading.GIF"></img>
		<img id="mainImage" onmouseover="showDetails()" onmouseout="showDetailsEnd()" onclick="changeImage()" src="https://unsplash.it/1920/1080/?random"></img>
		<div class="message"><noscript>Please enable javasript to start slideshow</noscript></div>
	</div>
	
	<div class="topOver">
		<div id="settings" onmouseover="showDetails()">
			<div id="content">
				<h2>Outset</h2>
				<span><a href="http://deucks.com">Created by Raajit Sharma</a></span>
				<h3>Options</h3>
				<span>Speed (seconds)</span>
				<input type="text" id="timer" name="timerValue"><br>
				<button onclick="setTimer()">Set</button><br><br>
				
				<input type="checkbox" id="blur" name="blur" value="Car">Blur Images</input><br><br>
				
				<span>Tip : Click on image to skip</span>
				
				<h4>Images from <a href="http://unsplash.com">Unsplash</a></h4>
				
			</div>
		</div>
	</div>
</body>
</html>