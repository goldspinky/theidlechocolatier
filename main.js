var CocoaBeans = 0;

function CocoaBeanClick(number){
    CocoaBeans = CocoaBeans + number;
    document.getElementById("CocoaBeans").innerHTML = CocoaBeans;
};

var CocoaPod = 0;

function buyCocoaPod(){
    var CocoaPodCost = Math.floor(10 * Math.pow(1.1,CocoaPod));    	//works out the cost of this cocoa pod
    if(CocoaBeans >= CocoaPodCost){                                  	//checks that the player can afford the cocoa pod
        CocoaPod = CocoaPod + 1;                                   	//increases number of cocoa pod
    	CocoaBeans = CocoaBeans - CocoaPodCost;                        	//removes the cocoa beans spent
        document.getElementById('CocoaPod').innerHTML = CocoaPod;  	//updates the number of cocoa pods for the user
        document.getElementById('CocoaBeans').innerHTML = CocoaBeans;  	//updates the number of cocoa beans for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,CocoaPod));       	//works out the cost of the next cocoa pod
    document.getElementById('CocoaPodCost').innerHTML = nextCost; 	//updates the cocoa pod cost for the user
};

window.setInterval(function(){
	
	CocoaBeansClick(CocoaPod);
	
}, 1000);

var CocoaTree = 0;

function buyCocoaTree(){
    var CocoaTreeCost = Math.floor(1000 * Math.pow(1.1,CocoaTree));    	//works out the cost of this cocoa tree
    if(CocoaBeans >= CocoaTreeCost){                                  	//checks that the player can afford the cocoa tree
        CocoaTree = CocoaTree + 1;                                   	//increases number of cocoa trees
    	CocoaBeans = CocoaBeans - CocoaTreeCost;                        //removes the cocoa beans spent
        document.getElementById('CocoaTree').innerHTML = CocoaTree;  	//updates the number of cocoa trees for the user
        document.getElementById('CocoaPod').innerHTML = CocoaPod;  	//updates the number of cocoa pods for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,CocoaTree));       	//works out the cost of the next cocoa tree
    document.getElementById('CocoaTreeCost').innerHTML = nextCost; 	//updates the cocoa tree cost for the user
};

window.setInterval(function(){
	
	CocoaPodClick(CocoaTree);
	
}, 100000);
