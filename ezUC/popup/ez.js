/*
On load, change url value in form
 */
browser.tabs.query({
	currentWindow: true,
	active: true
}).then(queryInfo => {
	browser.tabs.get(queryInfo[0].id).then(tab => {
		document.getElementById('ez-url').value = tab.url;
	});
});

/*
On submit, hide button and display spinner
 */
var ez_submit = document.getElementById('ez-submit');
ez_submit.onclick = function() {
	ez_submit.style.display = 'none';
	document.getElementById('ez-spinner').style.display = 'block';
}
