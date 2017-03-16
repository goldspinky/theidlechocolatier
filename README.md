<html>
	<head>
		<link rel="stylesheet" type="text/css" href="interface.css" />
	</head>
	<body>
	<h1>The Idle Chocolatier</h1>
	<h3>The tastiest game on the interwebs...</h3>
	<br/>
		
		<img src="coffee-bean-clip-art-at-clker-com-vector-clip-art-online-royalty-oWV12o-clipart.png" alt="Cocoa Bean" style="width:100px;height:60px;" onclick="cocoabeanclick(1)">
		<br />
		Click the cocoa bean!
		<br />
		Cocoa beans: <span id="cocoabeans">0</span>
		<br />
		<br />
		
		<b>Increase your cocoa bean production with cocoa pods!</b>
		<br />		
		<img src="stock-vector-cacao-bean-83810602.jpg" alt="Cocoa Pod" style="width:100px;height:60px;" onclick="buycocoapod()">
		<br />
		Cocoa pod cost: <span id="cocoapodcost">10</span>
		<br />
		Cocoa pods: <span id="cocoapod">0</span>
		<br />
		<br />
		
		<b>Increase your cocoa pod production with cocoa trees!</b>
		<br />
		<img src="cocoa-tree-19431278.jpg" alt="Cocoa Tree" style="width:100px;height:100px;" onclick="buycocoatree()">
		<br />
		Cocoa tree cost: <span id="cocoatreecost">1000</span>
		<br />
		Cocoa trees: <span id="cocoatree">0</span>
		<br />
		<script type="text/javascript" src="main.js"></script>
	
	</body>
</html>
