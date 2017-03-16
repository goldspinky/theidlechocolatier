<html>
	<head>
		<link rel="stylesheet" type="text/css" href="interface.css" />
	</head>
	<body>
	
	<!-- Link to Javascript file -->
	<script type="text/javascript" src="main.js"></script>
	
	<h1>The Idle Chocolatier</h1>
	<h3>The tastiest game on the interwebs...</h3>
	<br/>
		<table style="width:100%">
			<tr>
				<td><img src="http://www.clipartkid.com/images/47/coffee-bean-clip-art-at-clker-com-vector-clip-art-online-royalty-oWV12o-clipart.png" alt="Cocoa Bean" style="width:100px;height:60px;" onclick="cookieClick(1)"></td>
				
				<td><img src="http://thumb9.shutterstock.com/thumb_large/815224/815224,1314868922,6/stock-vector-cacao-bean-83810602.jpg" alt="Cocoa Pod" style="width:100px;height:60px;"></td>
			</tr>
			<tr>
				<td>Click the cocoa bean!
				<br />
				Cocoa beans: <span id="cookies">0</span></td>
				
				<td><button onclick="buyCursor()">Buy Pods</button>
				<br />
				<br />
				Cocoa pods: <span id="cursors">0</span>
				<br />
				Cocoa pod cost: <span id="cursorCost">10</span></td>
			</tr>				
		
	</body>
</html>
