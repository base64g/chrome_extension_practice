chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.sendMessage(tab.id, {command: "filter"},
	    function(msg){
		console.log("result message: ", msg);
	    });
    });
