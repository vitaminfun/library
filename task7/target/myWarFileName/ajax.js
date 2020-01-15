	function ajax(method, url, request, async){
	var xhr = new XMLHttpRequest();
	xhr.open(method,url,async);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhr.onreadystatechange = function(){
		if (this.readyState === 4 && this.status === 200) {
		var serverResponsetext = xhr.responseText;
		document.getElementById("resp").innerHTML=serverResponsetext;

		}
	};
	xhr.send(request);
}