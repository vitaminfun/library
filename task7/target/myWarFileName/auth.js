function showFormAuth(){
	document.getElementById("auth").hidden=false;
	document.getElementById("linkForAuth").hidden=true;
	document.getElementById("linkForReg").hidden=true;
}
	function sendAuth(){
	var inputLogin=document.getElementById("nameAuth");
	var inputPass=document.getElementById("passAuth");

	var login = inputLogin.value;
	var password = inputPass.value;

	var user={
		login:login,
		password:password
	};
	var json=JSON.stringify(user);

	ajax('POST','sendAuth', json ,true);

}