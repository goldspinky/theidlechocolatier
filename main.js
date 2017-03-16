var cocoabeans = 0;

function cocoabeanclick(number){
    cocoabeans = cocoabeans + number;
    document.getElementById("cocoabeans").innerHTML = cocoabeans;
};

//Click to buy Cocoa Pods
var cocoapod = 0;

function buycocoapod(){
    var cocoapodcost = Math.floor(10 * Math.pow(1.1,cocoapod));    	//works out the cost of this cocoa pod
    if(cocoabeans >= cocoapodcost){                                  	//checks that the player can afford the cocoa pod
        cocoapod = cocoapod + 1;                                   	//increases number of cocoa pod
    	cocoabeans = cocoabeans - cocoapodcost;                        	//removes the cocoa beans spent
        document.getElementById('cocoapod').innerHTML = cocoapod;  	//updates the number of cocoa pods for the user
        document.getElementById('cocoabeans').innerHTML = cocoabeans;  	//updates the number of cocoa beans for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cocoapod));       	//works out the cost of the next cocoa pod
    document.getElementById('cocoapodcost').innerHTML = nextCost; 	//updates the cocoa pod cost for the user
};

//Click to buy Cocoa Trees
var cocoatree = 0;

function buycocoatree(){
    var cocoatreecost = Math.floor(1000 * Math.pow(1.1,cocoatree));    	//works out the cost of this cocoa tree
    if(cocoabeans >= cocoatreecost){                                  	//checks that the player can afford the cocoa tree
        cocoatree = cocoatree + 1;                                   	//increases number of cocoa trees
    	cocoabeans = cocoabeans - cocoatreecost;                        //removes the cocoa beans spent
        document.getElementById('cocoatree').innerHTML = cocoatree;  	//updates the number of cocoa trees for the user
        document.getElementById('cocoabeans').innerHTML = cocoabeans;  	//updates the number of cocoa beans for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,cocoatree));       	//works out the cost of the next cocoa tree
    document.getElementById('cocoatreecost').innerHTML = nextCost; 	//updates the cocoa tree cost for the user
};

window.setInterval(function(){
	
	cocoabeanclick(cocoapod);
	buycocoapod(cocoatree)	
}, 1000);
