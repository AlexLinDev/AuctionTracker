chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("HI!");
	chrome.tabs.executeScript(tab.id, { file: 'execute.js' });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('Data Recieved: ' + request.data);
});