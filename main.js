var CocoaBeans = 0;

function CocoaBeanClick(number){
    CocoaBeans = CocoaBeans + number;
    document.getElementById("CocoaBeans").innerHTML = CocoaBeans;
};

var CocoaPods = 0;

function buyCocoaPods(){
    var CocoaPodCost = Math.floor(10 * Math.pow(1.1,CocoaPod));    	 //works out the cost of this cocoa pod
    if(CocoaBeans >= CocoaPodCost){                                  	 //checks that the player can afford the cocoa pod
        CocoaPod = CocoaPod + 1;                                   	//increases number of cocoa pod
    	CocoaBeans = CocoaBeans - CocoaPodCost;                        	//removes the cocoa beans spent
        document.getElementById('CocoaPod').innerHTML = CocoaPod;  	//updates the number of cocoa pods for the user
        document.getElementById('CocoaBeans').innerHTML = CocoaBeans;  	//updates the number of cocoa beans for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,CocoaPod));       	//works out the cost of the next cocoa pod
    document.getElementById('CocoaPodCost').innerHTML = nextCost; 	//updates the cocoa pod cost for the user
};

window.setInterval(function(){
	
	CocoaBeansClick(cursors);
	
}, 1000);
