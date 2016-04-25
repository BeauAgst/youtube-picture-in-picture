chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request && request.action === 'createWindow' && request.url) {
		chrome.windows.create({
			url: request.url,
			width: 640,
			height: 480,
			focused: true,
			type: 'panel'
		}, 
		function (win) {
		  sendResponse(win);
		});
	}
});

chrome.contextMenus.create({
	"title": "Picture-in-Picture",
	"id": "YPIP",
	"contexts": ["frame"],
});

chrome.contextMenus.onClicked.addListener(function(source) {
	var embedUrl = source.frameUrl;
	chrome.windows.create({
		url: embedUrl,
		width: 640,
		height: 480,
		focused: true,
		type: 'panel'
	}, 
	function (win) {
	  sendResponse(win);
	});
});